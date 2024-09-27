import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkillslistService {

  private items = [
    { image: 'assets/icons/mongodb.svg', text: 'MongoDB', details: [
      { 
        description: ' A1-A8', 
        link: 'ppf-select/A1-A8',
        modeleDetails:[
          {
            name: 'A1', 
            price: 10000,
            discription:"Full Wrap Paint Protection Kit",
            imgdetails:"/assets/images/ppf_select/2.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"Full Wrap Paint Protection Kit",
            imgdetails:"/assets/images/ppf_select/3.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"Full Wrap Paint Protection Kit",
            imgdetails:"/assets/images/ppf_select/4.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"Full Wrap Paint Protection Kit",
            imgdetails:"/assets/images/ppf_select/5.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"Full Wrap Paint Protection Kit",
            imgdetails:"/assets/images/ppf_select/6.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"Full Wrap Paint Protection Kit",
            imgdetails:"/assets/images/ppf_select/7.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"Full Wrap Paint Protection Kit",
            imgdetails:"/assets/images/ppf_select/8.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"Full Wrap Paint Protection Kit",
            imgdetails:"/assets/images/ppf_select/9.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"Full Wrap Paint Protection Kit",
            imgdetails:"/assets/images/ppf_select/10.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"Full Wrap Paint Protection Kit",
            imgdetails:"/assets/images/ppf_select/15.png"
          },
        ] 
      }, 
      { 
        description: 'RS', 
        link: '/ppf-select/RS',
        modeleDetails:[
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
        ] 
       }, 
      {
         description: 'Q', 
         link: '/ppf-select/Q',
         modeleDetails:[
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
        ] 
        },
      { 
        description: 'R8 1-4', 
        link: 'ppf-select/R8-1-4',
        modeleDetails:[
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
        ] 
      }
    ] },
    
    { image: '/assets/icons/html5.svg', text: 'HTML5', details: [
      { 
        description: 'DBX', 
        link: 'ppf-select' ,
        modeleDetails:[
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
        ] 
      }, 
      { 
        description: 'DBS', 
        link: '/ppf-select',
        modeleDetails:[
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
        ] 
      }, 
      { 
        description: 'DB12', 
        link: '/ppf-select',
        modeleDetails:[
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
        ] 
      },
      { 
        description: 'DB9', 
        link: 'ppf-select',
        modeleDetails:[
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
        ] 
      }
    ] }, 
    
    { image: '/assets/icons/css.svg', text: 'CSS3', details: [
      { 
        description: '1-8 Series', 
        link: 'ppf-select',
        modeleDetails:[
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
        ] 
      }, 
      { 
        description: ' i-3,4,5,7,X', 
        link: '/ppf-select',
        modeleDetails:[
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
        ] 
      }, 
      { 
        description: 'X1-X7', 
        link: '/ppf-select',
        modeleDetails:[
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
        ] 
      },
      { 
        description: ' M1-M5, M8', 
        link: 'ppf-select',
        modeleDetails:[
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
        ]  
      }
    ] },

    { image: '/assets/icons/js.svg', text: 'JavaScript', details: [
      { 
        description: 'SF90', 
        link: 'ppf-select',
        modeleDetails:[
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
        ] 
      }, 
      { 
        description: 'Portofino', 
        link: '/ppf-select',
        modeleDetails:[
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
        ]  
      }, 
      { 
        description: 'F8', 
        link: '/ppf-select',
        modeleDetails:[
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
        ] 
      },
      { 
        description: 'Roma', 
        link: 'ppf-select',
        modeleDetails:[
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
        ] 
       },
      { 
        description: 'GTS', 
        link: 'ppf-select',
        modeleDetails:[
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
        ] 
       },
      { 
        description: 'F430', 
        link: 'ppf-select',
        modeleDetails:[
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
        ] 
       },
      { 
        description: '458', 
        link: 'ppf-select',
        modeleDetails:[
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
        ] 
       },
      { 
        description: '488', 
        link: 'ppf-select',
        modeleDetails:[
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
        ] 
       },
      { 
        description: 'Purosangue', 
        link: 'ppf-select',
        modeleDetails:[
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
        ] 
       },
      { 
        description: 'GTB', 
        link: 'ppf-select',
        modeleDetails:[
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
        ] 
      },
    ] },

    { image: '/assets/icons/angular.svg', text: 'Angular', details: [
      { 
        description: 'A Class', 
        link: 'ppf-select',
        modeleDetails:[
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
        ] 
      }, 
      { 
        description: 'AMG SL', 
        link: '/ppf-select',
        modeleDetails:[
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
        ] 
      }, 
      { 
        description: 'B Class', 
        link: '/ppf-select',
        modeleDetails:[
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
        ] 
      },
      { 
        description: 'C Class', 
        link: 'ppf-select',
        modeleDetails:[
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
        ] 
      },
      { 
        description: '(W205)', 
        link: 'ppf-select',
        modeleDetails:[
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
        ] 
      },
      { 
        description: '(W206)', 
        link: 'ppf-select',
        modeleDetails:[
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
        ] 
      },
      { 
        description: 'CLA', 
        link: 'ppf-select',
        modeleDetails:[
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
        ] 
      },
      { 
        description: 'CLS', 
        link: 'ppf-select',
        modeleDetails:[
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
        ] 
      },
      { 
        description: 'E Class', 
        link: 'ppf-select',
        modeleDetails:[
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
        ] 
      },
      { 
        description: 'EQA', 
        link: 'ppf-select',
        modeleDetails:[
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
        ] 
      },
      { 
        description: 'EQB', 
        link: 'ppf-select',
      modeleDetails:[
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
        ] 
      },
      { 
        description: 'EQC', 
        link: 'ppf-select',
      modeleDetails:[
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
        ] 
      },
      { 
        description: 'EQE', 
        link: 'ppf-select',
      modeleDetails:[
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
        ] 
      },
      { 
        description: 'EQS', 
        link: 'ppf-select',
      modeleDetails:[
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
        ] 
      },
      { 
        description: 'G Class', 
        link: 'ppf-select',
      modeleDetails:[
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
        ] 
      },
      { 
        description: 'GLA', 
        link: 'ppf-select',
      modeleDetails:[
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
        ] 
      },
      { 
        description: 'GLB', 
        link: 'ppf-select',
      modeleDetails:[
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
        ] 
      },
      { 
        description: 'GLC', 
        link: 'ppf-select',
      modeleDetails:[
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
        ] 
      },
      { 
        description: 'GLE', 
        link: 'ppf-select',
      modeleDetails:[
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
        ] 
      },
      { 
        description: 'GLS', 
        link: 'ppf-select',
      modeleDetails:[
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
        ] 
      },
      { 
        description: 'S Class', 
        link: 'ppf-select',
      modeleDetails:[
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
        ] 
      }
    ] },

    { image: '/assets/icons/typescript.svg', text: 'TypeScript', details: [
      {
         description: '718', 
         link: 'ppf-select/718',
         modeleDetails:[
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
        ] 
        }, 
      { 
        description: '911(991)', 
        link: '/ppf-select/911(991)',
        modeleDetails:[
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
        ] 
      }, 
      { 
        description: '911(992)', 
        link: '/ppf-select',
        modeleDetails:[
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
        ] 
      },
      { 
        description: 'Carrera', 
        link: 'ppf-select',
        modeleDetails:[
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
        ] 
      },
      { 
        description: '911 GT3 Touring', 
        link: 'ppf-select',
        modeleDetails:[
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
        ] 
      },
      { 
        description: '911 GT3RS', 
        link: 'ppf-select',
        modeleDetails:[
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
        ] 
      },
      { 
        description: '911 GT3', 
        link: 'ppf-select',
        modeleDetails:[
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
        ] 
      },
      { 
        description: 'Macan', 
        link: 'ppf-select',
        modeleDetails:[
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
        ] 
      },
      { 
        description: 'Cayenne', 
        link: 'ppf-select',
        modeleDetails:[
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
        ] 
      },
      { 
        description: 'Taycan', 
        link: 'ppf-select',
        modeleDetails:[
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
        ] 
      },
      { 
        description: 'Panamera', 
        link: 'ppf-select',
        modeleDetails:[
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
        ] 
      },
    ] },

    { image: '/assets/icons/node-js.svg', text: 'Node js ', details: [
      { 
        description: 'Huracan', 
        link: 'ppf-select' ,
      modeleDetails:[
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
        ] 
      }, 
      { 
        description: 'Urus', 
        link: '/ppf-select',
      modeleDetails:[
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
        ] 
      }, 
      { 
        description: 'Gallardo', 
        link: '/ppf-select',
      modeleDetails:[
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
        ] 
      },
      { 
        description: 'Aventador', 
        link: 'ppf-select' ,
      modeleDetails:[
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
          {
            name: 'A1', 
            price: 10000,
            discription:"",
            imgdetails:"/assets/images/ppf/aston_martin.png"
          },
        ] 
      }
    ] }
  ];

  getCarData(): Observable<any[]> {
    return of(this.items);
  }

  // getCarDetails(link: string): Observable<any> {
  //   for (const car of this.items) {
  //     for (const detail of car.details) {
  //       if (detail.link === link) {
  //         return of(detail.modeleDetails);
  //       }
  //     }
  //   }
  //   return of([]);
  // }


   getItemsWithClones(): Observable<any[]> {
    const itemsWithClones = [...this.items, ...this.items, ...this.items]; // Cloning items 3 times
    return of(itemsWithClones);
  }

  getModelDetails(description: string): Observable<any[]> {
    // Find the specific detail object based on the description
    const item = this.items.find(i => i.details.some(d => d.description === description));
    const details = item?.details.find(d => d.description === description)?.modeleDetails || [];
    return of(details);
  }
}
