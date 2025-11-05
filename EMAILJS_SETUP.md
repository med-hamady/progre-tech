# Configuration EmailJS pour le Formulaire de Contact

Le formulaire de contact utilise **EmailJS** pour envoyer des emails sans avoir besoin d'un backend. Voici comment le configurer:

## Étape 1: Créer un compte EmailJS

1. Allez sur [https://www.emailjs.com/](https://www.emailjs.com/)
2. Cliquez sur "Sign Up" et créez un compte gratuit
3. Confirmez votre email

## Étape 2: Ajouter un Service Email

1. Dans le dashboard EmailJS, allez dans "Email Services"
2. Cliquez sur "Add New Service"
3. Choisissez votre fournisseur email (Gmail, Outlook, etc.)
4. Connectez votre email temporaire (par exemple: votre Gmail personnel)
5. Notez le **Service ID** généré

## Étape 3: Créer un Email Template

1. Allez dans "Email Templates"
2. Cliquez sur "Create New Template"
3. Configurez le template comme suit:

**Template Settings:**
- **Template Name**: Contact Form Proger Tech
- **Subject**: New Contact Form Submission - {{subject}}

**Template Content:**
```
New message from Proger Technology website:

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This email was sent from the Proger Technology contact form.
```

4. Notez le **Template ID** généré

## Étape 4: Obtenir la Public Key

1. Allez dans "Account" > "General"
2. Trouvez votre **Public Key** (ou API Key)
3. Copiez cette clé

## Étape 5: Configurer l'Application

Ouvrez le fichier `src/app/components/contact/contact.ts` et remplacez les valeurs suivantes:

```typescript
private emailjsConfig = {
  serviceId: 'YOUR_SERVICE_ID',      // Remplacez par votre Service ID
  templateId: 'YOUR_TEMPLATE_ID',    // Remplacez par votre Template ID
  publicKey: 'YOUR_PUBLIC_KEY'       // Remplacez par votre Public Key
};
```

## Étape 6: Configurer l'Email de Destination

Dans le même fichier `contact.ts`, ligne 52, vous pouvez changer l'email de destination:

```typescript
to_email: 'contact@progertechnology.com' // Remplacez par votre email temporaire
```

Ou directement dans le template EmailJS, configurez l'email de destination.

## Configuration Recommandée du Template EmailJS

Pour recevoir les emails correctement, dans votre template EmailJS:

1. **To Email**: Mettez votre email temporaire (ex: votre Gmail personnel)
2. **From Name**: `Proger Tech Website`
3. **From Email**: Utilisez l'email fourni par EmailJS (ex: service@emailjs.com)
4. **Reply To**: `{{from_email}}` (pour pouvoir répondre directement au client)

## Test de Configuration

1. Buildez l'application: `npm run build`
2. Lancez le serveur: `npm start`
3. Allez sur la page contact
4. Remplissez le formulaire et envoyez
5. Vérifiez votre boîte mail pour voir si vous avez reçu l'email

## Limites du Plan Gratuit EmailJS

- **200 emails par mois**
- Suffisant pour un site web de startup
- Si vous dépassez, vous devrez upgrader vers un plan payant

## Alternative Future: Email avec Domaine Personnalisé

Quand vous achèterez un domaine (progertechnology.com), vous pourrez:

1. Créer une adresse email professionnelle (contact@progertechnology.com)
2. Utiliser cette adresse dans EmailJS
3. Ou implémenter un backend Node.js avec Nodemailer

## Dépannage

### Erreur: "Failed to send email"
- Vérifiez que vos credentials EmailJS sont corrects
- Vérifiez votre connexion internet
- Vérifiez que vous n'avez pas dépassé la limite mensuelle

### Les emails n'arrivent pas
- Vérifiez vos spams
- Vérifiez que le template EmailJS est bien configuré
- Vérifiez que votre service email est bien connecté

## Support

Pour plus d'informations, consultez la documentation EmailJS:
https://www.emailjs.com/docs/
