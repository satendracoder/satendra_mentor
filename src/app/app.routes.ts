import { Routes } from '@angular/router';
import { IndexPageComponent } from './index-page/index-page.component';
import { BlogLayoutComponent } from './pages/blogs/blog-layout/blog-layout.component';
import { AboutPageComponent } from './pages/blogs/about-page/about-page.component';
import { RedmilComponent } from './pages/blogs/redmil/redmil.component';
import { WebconvoyComponent } from './pages/blogs/webconvoy/webconvoy.component';
import { CariaComponent } from './pages/blogs/caria/caria.component';
import { SsbrInetComponent } from './pages/blogs/ssbr-inet/ssbr-inet.component';
import { Company1Component } from './pages/blogs/company-1/company-1.component';
import { Company2Component } from './pages/blogs/company-2/company-2.component';
import { Company3Component } from './pages/blogs/company-3/company-3.component';
import { Company4Component } from './pages/blogs/company-4/company-4.component';
import { Company5Component } from './pages/blogs/company-5/company-5.component';
import { ProjectListComponent } from './pages/home/projects/project-list/project-list.component';
import { BlogListComponent } from './pages/home/blog-list/blog-list.component';

export const routes: Routes = [
    { path: '', component: IndexPageComponent },

    {
        path: '', component: BlogLayoutComponent, children: [
            { path: 'redmil_business_mall', component: RedmilComponent, title: 'Redmil_Business_Mall ' },
            { path: 'webconvoy_pvt_Ltd', component: WebconvoyComponent, title: 'webconvoy_pvt_ltd' },
            { path: 'caria_electronic', component: CariaComponent, title: 'Caria_Electronic' },
            { path: 'ssbr_inet_hub', component: SsbrInetComponent, title: 'Ssbr_iNet_Hub' },
            { path: 'company_1', component: Company1Component, title: 'Company-1' },
            { path: 'company_2', component: Company2Component, title: 'Company-2' },
            { path: 'company_3', component: Company3Component, title: 'Company-3' },
            { path: 'company_4', component: Company4Component, title: 'Company-4' },
            { path: 'company_5', component: Company5Component, title: 'Company-5' }
        ]
    },

    {path:'projects_list', component:ProjectListComponent, title:"All Projects List with live"},
    {path:'blog_list', component:BlogListComponent, title:"All Blogs"}

];
