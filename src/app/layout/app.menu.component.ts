import { OnInit, Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Home',
                items: [
                    { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/dashboard'] },
                    { label: 'OFabrications', icon: 'pi pi-fw pi-home', routerLink: ['/commercial/of'] },
                    { label: 'Clients', icon: 'pi pi-fw pi-home', routerLink: ['/commercial/client'] },
                    { label: 'Articles', icon: 'pi pi-fw pi-home', routerLink: ['/commercial/article'] }
                ]
            },
            // {
            //     label: 'Finance et contrôle de gestion (FICO)',
            //     items: [
            //         { label: 'Écritures au journal', icon: 'pi pi-fw pi-home', routerLink: ['/dashboard'] },
            //         { label: 'Écriture des factures', icon: 'pi pi-fw pi-home', routerLink: ['/dashboard'] },
            //         { label: 'Facture-reçu', icon: 'pi pi-fw pi-home', routerLink: ['/dashboard'] },
            //         { label: 'Factures sortantes', icon: 'pi pi-fw pi-home', routerLink: ['/dashboard'] },
            //     ]
            // },
            // {
            //     label: 'Gestion du personnel (HCM)',
            //     items: [
            //         { label: 'Croissance prévue', icon: 'pi pi-fw pi-home', routerLink: ['/dashboard'] },
            //         { label: 'Embauche et licenciement', icon: 'pi pi-fw pi-home', routerLink: ['/dashboard'] },
            //         { label: 'Développement des employés', icon: 'pi pi-fw pi-home', routerLink: ['/dashboard'] },
            //         { label: 'Contributions des employés aux objectifs de l’entreprise', icon: 'pi pi-fw pi-home', routerLink: ['/dashboard'] },
            //     ]
            // },
            // {
            //     label: 'Gestion des achats et approvisionnements (MM)',
            //     items: [
            //         { label: 'Achat de marchandises et de services', icon: 'pi pi-fw pi-home', routerLink: ['/dashboard'] },
            //         { label: 'Gestion des stocks ', icon: 'pi pi-fw pi-home', routerLink: ['/dashboard'] },
            //         { label: 'Inspection des articles', icon: 'pi pi-fw pi-home', routerLink: ['/dashboard'] },
            //         { label: 'Nomenclature', icon: 'pi pi-fw pi-home', routerLink: ['/dashboard'] },
            //     ]
            // },
            // {
            //     label: 'Maintenance des équipements (PM)',
            //     items: [
            //         { label: 'Planification ', icon: 'pi pi-fw pi-home', routerLink: ['/dashboard'] },
            //         { label: 'Production et expédition des marchandis', icon: 'pi pi-fw pi-home', routerLink: ['/dashboard'] },

            //     ]
            // },
            // {
            //     label: 'Planification de la production (PP)',
            //     items: [
            //         { label: 'Consultation de la nomenclature articles', icon: 'pi pi-fw pi-home', routerLink: ['/dashboard'] },
            //         { label: 'Création d’un ordre de production', icon: 'pi pi-fw pi-home', routerLink: ['/dashboard'] },
            //         { label: 'Création de nomenclatures', icon: 'pi pi-fw pi-home', routerLink: ['/dashboard'] },
            //         { label: 'Gérer les données planifiées', icon: 'pi pi-fw pi-home', routerLink: ['/dashboard'] },
            //     ]
            // },
            // {
            //     label: 'Gestion de la qualité (QM)',
            //     items: [
            //         { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/dashboard'] }
            //     ]
            // },
            // {
            //     label: 'Administration des ventes (SD)',
            //     items: [
            //         { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/dashboard'] }
            //     ]
            // },

            // {
            //     // label: 'UI Components',
            //     // items: [
            //     //     { label: 'Form Layout', icon: 'pi pi-fw pi-id-card', routerLink: ['/uikit/formlayout'] },
            //     //     { label: 'Input', icon: 'pi pi-fw pi-check-square', routerLink: ['/uikit/input'] },
            //     //     { label: 'Float Label', icon: 'pi pi-fw pi-bookmark', routerLink: ['/uikit/floatlabel'] },
            //     //     { label: 'Invalid State', icon: 'pi pi-fw pi-exclamation-circle', routerLink: ['/uikit/invalidstate'] },
            //     //     { label: 'Button', icon: 'pi pi-fw pi-box', routerLink: ['/uikit/button'] },
            //     //     { label: 'Table', icon: 'pi pi-fw pi-table', routerLink: ['/uikit/table'] },
            //     //     { label: 'List', icon: 'pi pi-fw pi-list', routerLink: ['/uikit/list'] },
            //     //     { label: 'Tree', icon: 'pi pi-fw pi-share-alt', routerLink: ['/uikit/tree'] },
            //     //     { label: 'Panel', icon: 'pi pi-fw pi-tablet', routerLink: ['/uikit/panel'] },
            //     //     { label: 'Overlay', icon: 'pi pi-fw pi-clone', routerLink: ['/uikit/overlay'] },
            //     //     { label: 'Media', icon: 'pi pi-fw pi-image', routerLink: ['/uikit/media'] },
            //     //     { label: 'Menu', icon: 'pi pi-fw pi-bars', routerLink: ['/uikit/menu'], routerLinkActiveOptions: { paths: 'subset', queryParams: 'ignored', matrixParams: 'ignored', fragment: 'ignored' } },
            //     //     { label: 'Message', icon: 'pi pi-fw pi-comment', routerLink: ['/uikit/message'] },
            //     //     { label: 'File', icon: 'pi pi-fw pi-file', routerLink: ['/uikit/file'] },
            //     //     { label: 'Chart', icon: 'pi pi-fw pi-chart-bar', routerLink: ['/uikit/charts'] },
            //     //     { label: 'Misc', icon: 'pi pi-fw pi-circle', routerLink: ['/uikit/misc'] }
            //     // ]
            // },
            // {
            //     label: 'Lectures', icon: 'pi pi-fw pi-circle',
            //     items: [
            //         { label: 'Liste Lectures', icon: 'pi pi-fw pi-eye', routerLink: ['/lecture'], badge: 'NEW' },
            //         { label: 'Diva', icon: 'pi pi-fw pi-globe', url: ['https://www.divasoftware.com'], target: '_blank' },
            //     ]
            // },
            // {
            //     // label: 'Utilities',
            //     // items: [
            //     //     { label: 'PrimeIcons', icon: 'pi pi-fw pi-prime', routerLink: ['/utilities/icons'] },
            //     //     { label: 'PrimeFlex', icon: 'pi pi-fw pi-desktop', url: ['https://www.primefaces.org/primeflex/'], target: '_blank' },
            //     // ]
            // },
            // {
            //     // label: 'Pages',
            //     // icon: 'pi pi-fw pi-briefcase',
            //     // items: [
            //     //     {
            //     //         label: 'Landing',
            //     //         icon: 'pi pi-fw pi-globe',
            //     //         routerLink: ['/landing']
            //     //     },
            //     //     {
            //     //         label: 'Auth',
            //     //         icon: 'pi pi-fw pi-user',
            //     //         items: [
            //     //             {
            //     //                 label: 'Login',
            //     //                 icon: 'pi pi-fw pi-sign-in',
            //     //                 routerLink: ['/auth/login']
            //     //             },
            //     //             {
            //     //                 label: 'Error',
            //     //                 icon: 'pi pi-fw pi-times-circle',
            //     //                 routerLink: ['/auth/error']
            //     //             },
            //     //             {
            //     //                 label: 'Access Denied',
            //     //                 icon: 'pi pi-fw pi-lock',
            //     //                 routerLink: ['/auth/access']
            //     //             }
            //     //         ]
            //     //     },
            //     //     {
            //     //         label: 'Crud',
            //     //         icon: 'pi pi-fw pi-pencil',
            //     //         routerLink: ['/pages/crud']
            //     //     },
            //     //     {
            //     //         label: 'Timeline',
            //     //         icon: 'pi pi-fw pi-calendar',
            //     //         routerLink: ['/pages/timeline']
            //     //     },
            //     //     {
            //     //         label: 'Not Found',
            //     //         icon: 'pi pi-fw pi-exclamation-circle',
            //     //         routerLink: ['/notfound']
            //     //     },
            //     //     {
            //     //         label: 'Empty',
            //     //         icon: 'pi pi-fw pi-circle-off',
            //     //         routerLink: ['/pages/empty']
            //     //     },
            //     // ]
            // },
            // {
            //     // label: 'Hierarchy',
            //     // items: [
            //     //     {
            //     //         label: 'Submenu 1', icon: 'pi pi-fw pi-bookmark',
            //     //         items: [
            //     //             {
            //     //                 label: 'Submenu 1.1', icon: 'pi pi-fw pi-bookmark',
            //     //                 items: [
            //     //                     { label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-bookmark' },
            //     //                     { label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-bookmark' },
            //     //                     { label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-bookmark' },
            //     //                 ]
            //     //             },
            //     //             {
            //     //                 label: 'Submenu 1.2', icon: 'pi pi-fw pi-bookmark',
            //     //                 items: [
            //     //                     { label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-bookmark' }
            //     //                 ]
            //     //             },
            //     //         ]
            //         },
            //         {
            //     //         label: 'Submenu 2', icon: 'pi pi-fw pi-bookmark',
            //     //         items: [
            //     //             {
            //     //                 label: 'Submenu 2.1', icon: 'pi pi-fw pi-bookmark',
            //     //                 items: [
            //     //                     { label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-bookmark' },
            //     //                     { label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-bookmark' },
            //     //                 ]
            //     //             },
            //     //             {
            //     //                 label: 'Submenu 2.2', icon: 'pi pi-fw pi-bookmark',
            //     //                 items: [
            //     //                     { label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-bookmark' },
            //     //                 ]
            //     //             },
            //     //         ]
            //     //     }
            //     // ]
            // },
            // {
            //     // label: 'Get Started',
            //     // items: [
            //     //     {
            //     //         label: 'Documentation', icon: 'pi pi-fw pi-question', routerLink: ['/documentation']
            //     //     },
            //     //     {
            //     //         label: 'View Source', icon: 'pi pi-fw pi-search', url: ['https://github.com/primefaces/sakai-ng'], target: '_blank'
            //     //     }
            //     // ]
            // }
        ];
    }
}
