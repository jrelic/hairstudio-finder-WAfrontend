import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import SignupKorisnik from '@/components/auth/SignupKorisnik'
import SignupSalon from '@/components/auth/SignupSalon'
import LoginKorisnik from '@/components/auth/LoginKorisnik'
import PocetnaSalon from '@/components/salon/PocetnaSalon'
import OdabraniSalon from '@/components/salon/OdabraniSalon'
import DodajFrizera from '@/components/salon/DodajFrizera'
import DodajTermin from '@/components/salon/DodajTermin'
import PocetnaKorisnik from '@/components/korisnik/PocetnaKorisnik'
import RezervacijaKorisnik from '@/components/korisnik/RezervacijaKorisnik'
import PogledajRezervacije from '@/components/salon/PogledajRezervacije'
import PogledajProfil from '@/components/salon/PogledajProfil'
import PogledajProfilSalon from '@/components/salon/PogledajProfilSalon'
import OdabirPlacanja from '@/components/salon/OdabirPlacanja'

import firebase from 'firebase'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/signup-korisnik',
      name: 'SignupKorisnik',
      component: SignupKorisnik
    },
    {
      path: '/signup-salon',
      name: 'SignupSalon',
      component: SignupSalon
    },
    {
      path: '/login-korisnik',
      name: 'LoginKorisnik',
      component: LoginKorisnik,
      meta:{
        logged: true
      }
    },
    {
      path: '/pocetna-salon',
      name: 'PocetnaSalon',
      component: PocetnaSalon,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/odabrani-salon',
      name: 'OdabraniSalon',
      component: OdabraniSalon,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/dodaj-frizera',
      name: 'DodajFrizera',
      component: DodajFrizera,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/pocetna-korisnik',
      name: 'PocetnaKorisnik',
      component: PocetnaKorisnik,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/dodaj-termin',
      name: 'DodajTermin',
      component: DodajTermin,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/rezervacija-korisnik',
      name: 'RezervacijaKorisnik',
      component: RezervacijaKorisnik,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/pogledaj-rezervacije',
      name: 'PogledajRezervacije',
      component: PogledajRezervacije,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/pogledaj-profil',
      name: 'PogledajProfil',
      component: PogledajProfil,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/odabir-placanja',
      name: 'OdabirPlacanja',
      component: OdabirPlacanja,
      meta: {
        requiresAuth: true
      }
    },
   
    {
      path: '/pogledaj-profil-salon',
      name: 'PogledajProfilSalon',
      component: PogledajProfilSalon,
      meta: {
        requiresAuth: true
      }
    }

   
  ]
})

router.beforeEach((to, from, next) => {
  //check to see if route requires auth
  if(to.matched.some(rec => rec.meta.requiresAuth)){
    //check auth state of user
    let user = firebase.auth().currentUser
    if(user){
      // user signed in, proceed to route
      next()
    } else{
      //no user signed in, redirect to login
      next({ name: 'Home' })
    }
  } if(to.matched.some(rec => rec.meta.logged)){
    //check auth state of user
    let user = firebase.auth().currentUser
    if(user){
      // user signed in, proceed to route
      next(false)
    } else{
      //no user signed in, redirect to login
      next()
    }
  }else {
    next()
  }
})

export default router