import {
  Component,
} from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {Project, ProjectInterface} from './components/project/project';


@Component({
  selector: 'app-root',
  imports: [MatMenuModule, Project],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  title = 'afcwebsite';
  projects: ProjectInterface[] = [
    {
      title: 'Design Library',
      description: 'Lightweight, responsive Angular components built for' +
        ' speed, reuse, and consistency across my personal projects. Documented ' +
        'in Storybook, tested with Chromatic, and designed with accessibility ' +
        'in mind.',
      technologies: ['Figma', 'Angular', 'Chromatic', 'Storybook', 'NotionAI'],
      image: './assets/buttons.png',
      links: [
        {
          name: 'Notion Docs',
          url: 'https://www.notion.so/ND-Design-Library-25478bd457138011adbadb8bdcc1adcb?'
        },
        {
          name: 'Github',
          url: 'https://github.com/Natchez/Natchez-Designs-Library'
        },
        {
          name: 'Storybook',
          url: 'https://master--68b314858f5546541963514c.chromatic.com/?path=/docs/components-button--docs'
        },
        {
          name: 'Chromatic',
          url: 'https://www.chromatic.com/builds?appId=68b314858f5546541963514c'
        }
      ],
      app: 'wds'

    },
    {
      title: 'Work Examples',
      description:
        ' A collection of work from previous roles, including\n' +
        ' wireframes, low and high-fidelity designs, traceability\n' +
        ' documents, proofs of concepts, and more. This link is\n' +
        ' password protected, please reach out if you’d like access.',
      technologies: ['Sketch', 'Adobe CC', 'Principle', 'Node.js', 'Figma'],
      image: './assets/workexamples.png',
      links: [
        {
          name: 'Priority Work',
          url: 'https://www.figma.com/deck/iPCzGUxzUUzL4ONPGrQv8F/Priority-Work?node-id=2023-57884&t=kVpTiPWMGerie1XM-1'
        },
        {
          name: 'Priority Interview Exercise Work',
          url: 'https://github.com/example'
        },
        {
          name: 'ICU Medical',
          url: 'https://www.figma.com/deck/Xj2qGCvOdy6QwcpjNntqE7/ICU-Work?node-id=1-42&t=7SIxgVwSyZW5zqeb-1'
        }
      ],
      app: 'wds'
    },
    {
      title: 'White Dot Studio',
      description: 'A modern bowling platform for bowlers and lane' +
        ' managers, offering ball-specific analytics, score tracking,' +
        ' league support, and lane management tools across mobile and desktop',
      technologies: ['Angular', 'TypeScript', 'Ionic', 'Supbase', 'Figma', 'Adobe CC'],
      image: './assets/wds.png',
      links: [
        {
          name: 'Case Study',
          url: 'https://www.figma.com/proto/cHzo5kIJ5kl7bhQJGiBfEL/WhiteDot-Studio?page-id=297%3A2100&node-id=297-2350&viewport=-756%2C86%2C0.23&t=GGPdRZ98iANBB8FK-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=297%3A2350'
        },
        {
          name: 'Mobile Prototype',
          url: 'https://www.figma.com/proto/cHzo5kIJ5kl7bhQJGiBfEL/WhiteDot-Studio?page-id=0%3A1&node-id=4-4174&viewport=-3%2C584%2C0.3&t=1ti228Bd3YNK57VC-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=4%3A4174&show-proto-sidebar=0'
        },
      ],
      app: 'wds'
    },
    {
      title: 'Insurance Management',
      description: 'A modern redesign of a Colorado-based workers’ compensation ' +
        'insurance platform with React and MUI in mind to create a' +
        ' cleaner, more intuitive, and accessible platform',
      technologies: ['Figma', 'Adobe XD'],
      image: './assets/insurance.png',
      links: [
        {
          name: 'Desktop Prototype (2022)',
          url: 'https://xd.adobe.com/view/6e4c69f4-8840-4c5d-adc8-8d3f5d5de695-3b1f/'
        },
        {
          name: 'Desktop Prototype (2025)',
          url: 'https://www.figma.com/proto/dcS0TJ1zqMN2FqIFbifemz/Insurance-Platform?node-id=458-7707&p=f&viewport=259%2C2484%2C0.4&t=kBDvOiZMyLPrr24E-0&scaling=scale-down&content-scaling=fixed&starting-point-node-id=563%3A10985'
        },
        {
          name: 'Mobile Prototype',
          url: 'https://www.figma.com/proto/dcS0TJ1zqMN2FqIFbifemz/Insurance-Platform?page-id=249%3A1843&node-id=349-12033&p=f&viewport=-490%2C58%2C0.23&t=98dfA88dnSnR2flz-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=349%3A12038'
        },
        {
          name: 'Figma File',
          url: 'https://www.figma.com/design/dcS0TJ1zqMN2FqIFbifemz/Insurance-Platform?node-id=458-7707&t=8DJG8Cmc7JoMm4Kv-1'
        }
      ],
      app: 'ins'
    },
    {
      title: 'FC Cookbook',
      description:
        'A digital recipe management application designed for friends and family.\n' +
        'Features include customizable recipe creation, and shopping lists.',
      technologies: ['Angular', 'TailwindCSS', 'Supbase', 'AWS', 'Figma', 'Ionic'],
      image: './assets/fccb.png',
      links: [
        {
          name: 'Mobile Prototype',
          url: 'https://www.figma.com/proto/KnydGlFhrtmgswmwOpTrad/FCCB?page-id=2134%3A3396&node-id=2670-7799&p=f&viewport=348%2C256%2C0.1&t=vzjlWDv8Wah0NhRv-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2670%3A7799'
        },
        {
          name: 'Desktop Prototype',
          url: 'https://www.figma.com/proto/KnydGlFhrtmgswmwOpTrad/FCCB?page-id=2330%3A4565&node-id=2883-23519&p=f&viewport=407%2C155%2C0.32&t=4btAjki5dhYnhhwS-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2883%3A23519'
        },
      ],
      app: 'fccb'
    }
  ];


}

