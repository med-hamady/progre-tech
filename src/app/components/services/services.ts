import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.html',
  styleUrls: ['./services.css']
})
export class ServicesComponent {
  services = [
    {
      icon: '💻',
      title: 'Développement Web',
      description: 'Sites web et applications web modernes, performantes et évolutives pour votre entreprise.'
    },
    {
      icon: '📱',
      title: 'Applications Mobile',
      description: 'Applications natives et hybrides pour iOS et Android avec une expérience utilisateur exceptionnelle.'
    },
    {
      icon: '🏢',
      title: 'Solutions Entreprise',
      description: 'ERP, CRM, gestion de projets et solutions métier personnalisées pour votre organisation.'
    },
    {
      icon: '🛠️',
      title: 'Management & Operations',
      description: 'Configuration, reporting, support, marketing, conformité et administration système.'
    },
    {
      icon: '📊',
      title: 'Data & Analytics',
      description: 'Entrepôts de données, business intelligence et formation de modèles ML dédiés.'
    },
    {
      icon: '🔄',
      title: 'Channels',
      description: 'Interagissez avec la plateforme via différents canaux: API, Mobile, Web, USSD et NFC.'
    },
    {
      icon: '🔗',
      title: 'Intégrations Techniques',
      description: 'eKYC, eKYB, onboarding digital, anti-blanchiment et système de détection de fraude.'
    },
    {
      icon: '💳',
      title: 'E-services Integrations',
      description: 'Paiement de factures, e-commerce, recharge aérienne, eGov, cartes cadeaux, assurance...'
    },
    {
      icon: '🔒',
      title: 'Sécurité',
      description: 'Protection avancée, audits de sécurité, conformité et chiffrement de bout en bout.'
    }
  ];
}