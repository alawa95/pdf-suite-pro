// ========================================
// PDF Suite Pro - JavaScript complet
// ========================================

(function() {
    'use strict';

    // ========================================
    // TRADUCTIONS (5 LANGUES)
    // ========================================
    
    const translations = {
        fr: {
            'logo': 'PDF Suite Pro',
            'nav.tools': 'Outils',
            'nav.features': 'Fonctionnalités',
            'nav.pricing': 'Tarifs',
            'nav.login': 'Connexion',
            'nav.signup': 'S\'inscrire',
            'nav.assistant': 'Assistant IA',
            'hero.title': 'Tous vos outils PDF en un seul endroit',
            'hero.subtitle': 'Fusionnez, divisez, compressez et convertissez vos fichiers PDF gratuitement et en toute sécurité',
            'hero.merge': 'Fusionner des PDF',
            'hero.split': 'Diviser un PDF',
            'hero.secure': '100% Sécurisé',
            'hero.cloud': 'Traitement cloud',
            'hero.unlimited': 'Utilisation illimitée',
            'hero.card.title': 'Document.pdf',
            'hero.card.subtitle': 'Prêt à être traité',
            'tools.title': 'Outils PDF Populaires',
            'tools.subtitle': 'Choisissez l\'outil dont vous avez besoin',
            'tools.pdfToWord.title': 'PDF vers Word',
            'tools.pdfToWord.desc': 'Convertir PDF en Word modifiable',
            'tools.wordToPdf.title': 'Word vers PDF',
            'tools.wordToPdf.desc': 'Convertir documents Word en PDF',
            'tools.jpgToPdf.title': 'JPG vers PDF',
            'tools.jpgToPdf.desc': 'Convertir images en PDF',
            'tools.merge.title': 'Fusionner PDF',
            'tools.merge.desc': 'Combiner plusieurs PDF',
            'tools.split.title': 'Diviser PDF',
            'tools.split.desc': 'Séparer PDF en plusieurs fichiers',
            'tools.compress.title': 'Compresser PDF',
            'tools.compress.desc': 'Réduire la taille du PDF',
            'tools.rotate.title': 'Pivoter PDF',
            'tools.rotate.desc': 'Faire pivoter les pages PDF',
            'tools.protect.title': 'Protéger PDF',
            'tools.protect.desc': 'Ajouter mot de passe',
            'tools.unlock.title': 'Déverrouiller PDF',
            'tools.unlock.desc': 'Supprimer mot de passe PDF',
            'tools.sign.title': 'Signer PDF',
            'tools.sign.desc': 'Ajouter signature numérique',
            'tools.watermark.title': 'Filigrane',
            'tools.watermark.desc': 'Ajouter filigrane au PDF',
            'tools.edit.title': 'Éditer PDF',
            'tools.edit.desc': 'Modifier texte et images',
            'tools.button': 'Utiliser maintenant',
            'badge.free': 'Gratuit',
            'badge.premium': 'Premium',
            'features.title': 'Pourquoi choisir PDF Suite Pro ?',
            'features.subtitle': 'Découvrez ce qui rend PDF Suite Pro unique',
            'features.security.title': 'Sécurité maximale',
            'features.security.desc': 'Vos fichiers sont cryptés et supprimés automatiquement après traitement.',
            'features.speed.title': 'Ultra-rapide',
            'features.speed.desc': 'Traitement en quelques secondes grâce à nos serveurs optimisés.',
            'features.accuracy.title': 'Précision parfaite',
            'features.accuracy.desc': 'Préservation de la mise en page et du formatage original.',
            'features.cloud.title': '100% en ligne',
            'features.cloud.desc': 'Aucune installation requise, accessible de partout.',
            'features.ai.title': 'Assistant IA',
            'features.ai.desc': 'Support intelligent disponible 24/7 pour vous guider.',
            'features.quality.title': 'Qualité pro',
            'features.quality.desc': 'Utilisé par plus d\'un million de professionnels.',
            'testimonials.title': 'Ils nous font confiance',
            'testimonials.subtitle': 'Plus de 1 million d\'utilisateurs satisfaits',
            'testimonials.quote1': '"Excellent outil ! J\'utilise PDF Suite Pro tous les jours pour mon travail. Rapide, fiable et très intuitif."',
            'testimonials.author1': 'Marie Dupont',
            'testimonials.role1': 'Chef de projet',
            'testimonials.quote2': '"Interface très professionnelle et facile à utiliser. Les conversions sont de qualité exceptionnelle."',
            'testimonials.author2': 'Jean Martin',
            'testimonials.role2': 'Entrepreneur',
            'testimonials.quote3': '"Un gain de temps considérable ! Je recommande vivement PDF Suite Pro à tous mes collègues."',
            'testimonials.author3': 'Sophie Bernard',
            'testimonials.role3': 'Avocate',
            'cta.title': 'Prêt à transformer vos PDF ?',
            'cta.subtitle': 'Rejoignez plus d\'un million d\'utilisateurs qui font confiance à PDF Suite Pro',
            'cta.button': 'Commencer gratuitement',
            'footer.tagline': 'Suite complète pour vos PDF. Rapide, sûre, professionnelle.',
            'footer.product': 'Produit',
            'footer.support': 'Support',
            'footer.legal': 'Légal',
            'footer.help': 'Centre d\'aide',
            'footer.contact': 'Contact',
            'footer.privacy': 'Confidentialité',
            'footer.terms': 'Conditions',
            'footer.cookies': 'Cookies',
            'footer.copyright': '© 2025 PDF Suite Pro. Tous droits réservés.',
            'ai.title': 'Assistant IA PDF',
            'ai.welcome': 'Bonjour ! Je suis votre assistant IA pour les PDF. Comment puis-je vous aider aujourd\'hui ?',
            'ai.quick.merge': 'Fusionner des PDF',
            'ai.quick.split': 'Diviser un PDF',
            'ai.quick.compress': 'Compresser un PDF',
            'ai.placeholder': 'Posez votre question...'
        },
        en: {
            'logo': 'PDF Suite Pro',
            'nav.tools': 'Tools',
            'nav.features': 'Features',
            'nav.pricing': 'Pricing',
            'nav.login': 'Login',
            'nav.signup': 'Sign Up',
            'nav.assistant': 'AI Assistant',
            'hero.title': 'All your PDF tools in one place',
            'hero.subtitle': 'Merge, split, compress and convert your PDF files for free and securely',
            'hero.merge': 'Merge PDFs',
            'hero.split': 'Split PDF',
            'hero.secure': '100% Secure',
            'hero.cloud': 'Cloud processing',
            'hero.unlimited': 'Unlimited use',
            'hero.card.title': 'Document.pdf',
            'hero.card.subtitle': 'Ready to be processed',
            'tools.title': 'Popular PDF Tools',
            'tools.subtitle': 'Choose the tool you need',
            'tools.pdfToWord.title': 'PDF to Word',
            'tools.pdfToWord.desc': 'Convert PDF to editable Word',
            'tools.wordToPdf.title': 'Word to PDF',
            'tools.wordToPdf.desc': 'Convert Word documents to PDF',
            'tools.jpgToPdf.title': 'JPG to PDF',
            'tools.jpgToPdf.desc': 'Convert images to PDF',
            'tools.merge.title': 'Merge PDF',
            'tools.merge.desc': 'Combine multiple PDFs',
            'tools.split.title': 'Split PDF',
            'tools.split.desc': 'Separate PDF into multiple files',
            'tools.compress.title': 'Compress PDF',
            'tools.compress.desc': 'Reduce PDF file size',
            'tools.rotate.title': 'Rotate PDF',
            'tools.rotate.desc': 'Rotate PDF pages',
            'tools.protect.title': 'Protect PDF',
            'tools.protect.desc': 'Add password protection',
            'tools.unlock.title': 'Unlock PDF',
            'tools.unlock.desc': 'Remove PDF password',
            'tools.sign.title': 'Sign PDF',
            'tools.sign.desc': 'Add digital signature',
            'tools.watermark.title': 'Watermark',
            'tools.watermark.desc': 'Add watermark to PDF',
            'tools.edit.title': 'Edit PDF',
            'tools.edit.desc': 'Modify text and images',
            'tools.button': 'Use now',
            'badge.free': 'Free',
            'badge.premium': 'Premium',
            'features.title': 'Why choose PDF Suite Pro?',
            'features.subtitle': 'Discover what makes PDF Suite Pro unique',
            'features.security.title': 'Maximum security',
            'features.security.desc': 'Your files are encrypted and automatically deleted after processing.',
            'features.speed.title': 'Ultra-fast',
            'features.speed.desc': 'Processing in seconds thanks to our optimized servers.',
            'features.accuracy.title': 'Perfect accuracy',
            'features.accuracy.desc': 'Preservation of original layout and formatting.',
            'features.cloud.title': '100% online',
            'features.cloud.desc': 'No installation required, accessible from anywhere.',
            'features.ai.title': 'AI Assistant',
            'features.ai.desc': 'Intelligent support available 24/7 to guide you.',
            'features.quality.title': 'Professional quality',
            'features.quality.desc': 'Used by over one million professionals.',
            'testimonials.title': 'They trust us',
            'testimonials.subtitle': 'Over 1 million satisfied users',
            'testimonials.quote1': '"Excellent tool! I use PDF Suite Pro every day for my work. Fast, reliable and very intuitive."',
            'testimonials.author1': 'Marie Dupont',
            'testimonials.role1': 'Project Manager',
            'testimonials.quote2': '"Very professional interface and easy to use. The conversions are of exceptional quality."',
            'testimonials.author2': 'Jean Martin',
            'testimonials.role2': 'Entrepreneur',
            'testimonials.quote3': '"A considerable time saver! I highly recommend PDF Suite Pro to all my colleagues."',
            'testimonials.author3': 'Sophie Bernard',
            'testimonials.role3': 'Lawyer',
            'cta.title': 'Ready to transform your PDFs?',
            'cta.subtitle': 'Join over one million users who trust PDF Suite Pro',
            'cta.button': 'Start for free',
            'footer.tagline': 'Complete suite for your PDFs. Fast, secure, professional.',
            'footer.product': 'Product',
            'footer.support': 'Support',
            'footer.legal': 'Legal',
            'footer.help': 'Help Center',
            'footer.contact': 'Contact',
            'footer.privacy': 'Privacy',
            'footer.terms': 'Terms',
            'footer.cookies': 'Cookies',
            'footer.copyright': '© 2025 PDF Suite Pro. All rights reserved.',
            'ai.title': 'PDF AI Assistant',
            'ai.welcome': 'Hello! I am your AI assistant for PDFs. How can I help you today?',
            'ai.quick.merge': 'Merge PDFs',
            'ai.quick.split': 'Split PDF',
            'ai.quick.compress': 'Compress PDF',
            'ai.placeholder': 'Ask your question...'
        },
        es: {
            'logo': 'PDF Suite Pro',
            'nav.tools': 'Herramientas',
            'nav.features': 'Características',
            'nav.pricing': 'Precios',
            'nav.login': 'Iniciar sesión',
            'nav.signup': 'Registrarse',
            'nav.assistant': 'Asistente IA',
            'hero.title': 'Todas tus herramientas PDF en un solo lugar',
            'hero.subtitle': 'Fusiona, divide, comprime y convierte tus archivos PDF gratis y de forma segura',
            'hero.merge': 'Fusionar PDFs',
            'hero.split': 'Dividir PDF',
            'hero.secure': '100% Seguro',
            'hero.cloud': 'Procesamiento en nube',
            'hero.unlimited': 'Uso ilimitado',
            'hero.card.title': 'Documento.pdf',
            'hero.card.subtitle': 'Listo para procesar',
            'tools.title': 'Herramientas PDF Populares',
            'tools.subtitle': 'Elige la herramienta que necesitas',
            'tools.pdfToWord.title': 'PDF a Word',
            'tools.pdfToWord.desc': 'Convertir PDF a Word editable',
            'tools.wordToPdf.title': 'Word a PDF',
            'tools.wordToPdf.desc': 'Convertir documentos Word a PDF',
            'tools.jpgToPdf.title': 'JPG a PDF',
            'tools.jpgToPdf.desc': 'Convertir imágenes a PDF',
            'tools.merge.title': 'Fusionar PDF',
            'tools.merge.desc': 'Combinar varios PDFs',
            'tools.split.title': 'Dividir PDF',
            'tools.split.desc': 'Separar PDF en varios archivos',
            'tools.compress.title': 'Comprimir PDF',
            'tools.compress.desc': 'Reducir tamaño del PDF',
            'tools.rotate.title': 'Rotar PDF',
            'tools.rotate.desc': 'Rotar páginas PDF',
            'tools.protect.title': 'Proteger PDF',
            'tools.protect.desc': 'Añadir contraseña',
            'tools.unlock.title': 'Desbloquear PDF',
            'tools.unlock.desc': 'Eliminar contraseña PDF',
            'tools.sign.title': 'Firmar PDF',
            'tools.sign.desc': 'Añadir firma digital',
            'tools.watermark.title': 'Marca de agua',
            'tools.watermark.desc': 'Añadir marca de agua al PDF',
            'tools.edit.title': 'Editar PDF',
            'tools.edit.desc': 'Modificar texto e imágenes',
            'tools.button': 'Usar ahora',
            'badge.free': 'Gratis',
            'badge.premium': 'Premium',
            'features.title': '¿Por qué elegir PDF Suite Pro?',
            'features.subtitle': 'Descubre lo que hace único a PDF Suite Pro',
            'features.security.title': 'Máxima seguridad',
            'features.security.desc': 'Tus archivos están encriptados y se eliminan automáticamente después del procesamiento.',
            'features.speed.title': 'Ultra-rápido',
            'features.speed.desc': 'Procesamiento en segundos gracias a nuestros servidores optimizados.',
            'features.accuracy.title': 'Precisión perfecta',
            'features.accuracy.desc': 'Preservación del diseño y formato original.',
            'features.cloud.title': '100% en línea',
            'features.cloud.desc': 'No requiere instalación, accesible desde cualquier lugar.',
            'features.ai.title': 'Asistente IA',
            'features.ai.desc': 'Soporte inteligente disponible 24/7 para guiarte.',
            'features.quality.title': 'Calidad profesional',
            'features.quality.desc': 'Utilizado por más de un millón de profesionales.',
            'testimonials.title': 'Confían en nosotros',
            'testimonials.subtitle': 'Más de 1 millón de usuarios satisfechos',
            'testimonials.quote1': '"¡Excelente herramienta! Uso PDF Suite Pro todos los días para mi trabajo. Rápido, confiable y muy intuitivo."',
            'testimonials.author1': 'María Pérez',
            'testimonials.role1': 'Jefa de proyecto',
            'testimonials.quote2': '"Interfaz muy profesional y fácil de usar. Las conversiones son de calidad excepcional."',
            'testimonials.author2': 'Juan García',
            'testimonials.role2': 'Empresario',
            'testimonials.quote3': '"¡Un ahorro de tiempo considerable! Recomiendo encarecidamente PDF Suite Pro a todos mis colegas."',
            'testimonials.author3': 'Sofía López',
            'testimonials.role3': 'Abogada',
            'cta.title': '¿Listo para transformar tus PDFs?',
            'cta.subtitle': 'Únete a más de un millón de usuarios que confían en PDF Suite Pro',
            'cta.button': 'Comenzar gratis',
            'footer.tagline': 'Suite completa para tus PDFs. Rápida, segura, profesional.',
            'footer.product': 'Producto',
            'footer.support': 'Soporte',
            'footer.legal': 'Legal',
            'footer.help': 'Centro de ayuda',
            'footer.contact': 'Contacto',
            'footer.privacy': 'Privacidad',
            'footer.terms': 'Términos',
            'footer.cookies': 'Cookies',
            'footer.copyright': '© 2025 PDF Suite Pro. Todos los derechos reservados.',
            'ai.title': 'Asistente IA PDF',
            'ai.welcome': '¡Hola! Soy tu asistente IA para PDFs. ¿Cómo puedo ayudarte hoy?',
            'ai.quick.merge': 'Fusionar PDFs',
            'ai.quick.split': 'Dividir PDF',
            'ai.quick.compress': 'Comprimir PDF',
            'ai.placeholder': 'Haz tu pregunta...'
        },
        de: {
            'logo': 'PDF Suite Pro',
            'nav.tools': 'Werkzeuge',
            'nav.features': 'Funktionen',
            'nav.pricing': 'Preise',
            'nav.login': 'Anmelden',
            'nav.signup': 'Registrieren',
            'nav.assistant': 'KI-Assistent',
            'hero.title': 'Alle Ihre PDF-Tools an einem Ort',
            'hero.subtitle': 'PDFs kostenlos und sicher zusammenführen, teilen, komprimieren und konvertieren',
            'hero.merge': 'PDFs zusammenführen',
            'hero.split': 'PDF teilen',
            'hero.secure': '100% Sicher',
            'hero.cloud': 'Cloud-Verarbeitung',
            'hero.unlimited': 'Unbegrenzte Nutzung',
            'hero.card.title': 'Dokument.pdf',
            'hero.card.subtitle': 'Bereit zur Verarbeitung',
            'tools.title': 'Beliebte PDF-Tools',
            'tools.subtitle': 'Wählen Sie das benötigte Tool',
            'tools.pdfToWord.title': 'PDF zu Word',
            'tools.pdfToWord.desc': 'PDF in bearbeitbares Word konvertieren',
            'tools.wordToPdf.title': 'Word zu PDF',
            'tools.wordToPdf.desc': 'Word-Dokumente in PDF konvertieren',
            'tools.jpgToPdf.title': 'JPG zu PDF',
            'tools.jpgToPdf.desc': 'Bilder in PDF konvertieren',
            'tools.merge.title': 'PDF zusammenführen',
            'tools.merge.desc': 'Mehrere PDFs kombinieren',
            'tools.split.title': 'PDF teilen',
            'tools.split.desc': 'PDF in mehrere Dateien aufteilen',
            'tools.compress.title': 'PDF komprimieren',
            'tools.compress.desc': 'PDF-Dateigröße reduzieren',
            'tools.rotate.title': 'PDF drehen',
            'tools.rotate.desc': 'PDF-Seiten drehen',
            'tools.protect.title': 'PDF schützen',
            'tools.protect.desc': 'Passwortschutz hinzufügen',
            'tools.unlock.title': 'PDF entsperren',
            'tools.unlock.desc': 'PDF-Passwort entfernen',
            'tools.sign.title': 'PDF signieren',
            'tools.sign.desc': 'Digitale Signatur hinzufügen',
            'tools.watermark.title': 'Wasserzeichen',
            'tools.watermark.desc': 'Wasserzeichen zum PDF hinzufügen',
            'tools.edit.title': 'PDF bearbeiten',
            'tools.edit.desc': 'Text und Bilder ändern',
            'tools.button': 'Jetzt verwenden',
            'badge.free': 'Kostenlos',
            'badge.premium': 'Premium',
            'features.title': 'Warum PDF Suite Pro wählen?',
            'features.subtitle': 'Entdecken Sie, was PDF Suite Pro einzigartig macht',
            'features.security.title': 'Maximale Sicherheit',
            'features.security.desc': 'Ihre Dateien werden verschlüsselt und nach der Verarbeitung automatisch gelöscht.',
            'features.speed.title': 'Ultra-schnell',
            'features.speed.desc': 'Verarbeitung in Sekunden dank unserer optimierten Server.',
            'features.accuracy.title': 'Perfekte Genauigkeit',
            'features.accuracy.desc': 'Beibehaltung von ursprünglichem Layout und Formatierung.',
            'features.cloud.title': '100% online',
            'features.cloud.desc': 'Keine Installation erforderlich, von überall zugänglich.',
            'features.ai.title': 'KI-Assistent',
            'features.ai.desc': 'Intelligenter Support rund um die Uhr verfügbar.',
            'features.quality.title': 'Professionelle Qualität',
            'features.quality.desc': 'Von über einer Million Fachleuten genutzt.',
            'testimonials.title': 'Sie vertrauen uns',
            'testimonials.subtitle': 'Über 1 Million zufriedene Nutzer',
            'testimonials.quote1': '"Ausgezeichnetes Tool! Ich verwende PDF Suite Pro täglich für meine Arbeit. Schnell, zuverlässig und sehr intuitiv."',
            'testimonials.author1': 'Maria Schmidt',
            'testimonials.role1': 'Projektleiterin',
            'testimonials.quote2': '"Sehr professionelle Oberfläche und einfach zu bedienen. Die Konvertierungen sind von außergewöhnlicher Qualität."',
            'testimonials.author2': 'Hans Müller',
            'testimonials.role2': 'Unternehmer',
            'testimonials.quote3': '"Eine erhebliche Zeitersparnis! Ich empfehle PDF Suite Pro allen meinen Kollegen."',
            'testimonials.author3': 'Sophie Weber',
            'testimonials.role3': 'Anwältin',
            'cta.title': 'Bereit, Ihre PDFs zu transformieren?',
            'cta.subtitle': 'Schließen Sie sich über einer Million Nutzern an, die PDF Suite Pro vertrauen',
            'cta.button': 'Kostenlos starten',
            'footer.tagline': 'Komplette Suite für Ihre PDFs. Schnell, sicher, professionell.',
            'footer.product': 'Produkt',
            'footer.support': 'Support',
            'footer.legal': 'Rechtliches',
            'footer.help': 'Hilfe-Center',
            'footer.contact': 'Kontakt',
            'footer.privacy': 'Datenschutz',
            'footer.terms': 'Bedingungen',
            'footer.cookies': 'Cookies',
            'footer.copyright': '© 2025 PDF Suite Pro. Alle Rechte vorbehalten.',
            'ai.title': 'PDF KI-Assistent',
            'ai.welcome': 'Hallo! Ich bin Ihr KI-Assistent für PDFs. Wie kann ich Ihnen heute helfen?',
            'ai.quick.merge': 'PDFs zusammenführen',
            'ai.quick.split': 'PDF teilen',
            'ai.quick.compress': 'PDF komprimieren',
            'ai.placeholder': 'Stellen Sie Ihre Frage...'
        },
        ar: {
            'logo': 'PDF Suite Pro',
            'nav.tools': 'الأدوات',
            'nav.features': 'المميزات',
            'nav.pricing': 'الأسعار',
            'nav.login': 'تسجيل الدخول',
            'nav.signup': 'التسجيل',
            'nav.assistant': 'مساعد الذكاء الاصطناعي',
            'hero.title': 'جميع أدوات PDF في مكان واحد',
            'hero.subtitle': 'دمج وتقسيم وضغط وتحويل ملفات PDF مجانًا وبشكل آمن',
            'hero.merge': 'دمج ملفات PDF',
            'hero.split': 'تقسيم PDF',
            'hero.secure': '100٪ آمن',
            'hero.cloud': 'معالجة سحابية',
            'hero.unlimited': 'استخدام غير محدود',
            'hero.card.title': 'مستند.pdf',
            'hero.card.subtitle': 'جاهز للمعالجة',
            'tools.title': 'أدوات PDF الشائعة',
            'tools.subtitle': 'اختر الأداة التي تحتاجها',
            'tools.pdfToWord.title': 'PDF إلى Word',
            'tools.pdfToWord.desc': 'تحويل PDF إلى Word قابل للتحرير',
            'tools.wordToPdf.title': 'Word إلى PDF',
            'tools.wordToPdf.desc': 'تحويل مستندات Word إلى PDF',
            'tools.jpgToPdf.title': 'JPG إلى PDF',
            'tools.jpgToPdf.desc': 'تحويل الصور إلى PDF',
            'tools.merge.title': 'دمج PDF',
            'tools.merge.desc': 'دمج عدة ملفات PDF',
            'tools.split.title': 'تقسيم PDF',
            'tools.split.desc': 'فصل PDF إلى ملفات متعددة',
            'tools.compress.title': 'ضغط PDF',
            'tools.compress.desc': 'تقليل حجم ملف PDF',
            'tools.rotate.title': 'تدوير PDF',
            'tools.rotate.desc': 'تدوير صفحات PDF',
            'tools.protect.title': 'حماية PDF',
            'tools.protect.desc': 'إضافة كلمة مرور',
            'tools.unlock.title': 'إلغاء قفل PDF',
            'tools.unlock.desc': 'إزالة كلمة مرور PDF',
            'tools.sign.title': 'توقيع PDF',
            'tools.sign.desc': 'إضافة توقيع رقمي',
            'tools.watermark.title': 'علامة مائية',
            'tools.watermark.desc': 'إضافة علامة مائية إلى PDF',
            'tools.edit.title': 'تحرير PDF',
            'tools.edit.desc': 'تعديل النص والصور',
            'tools.button': 'استخدم الآن',
            'badge.free': 'مجاني',
            'badge.premium': 'مميز',
            'features.title': 'لماذا تختار PDF Suite Pro؟',
            'features.subtitle': 'اكتشف ما يجعل PDF Suite Pro فريدًا',
            'features.security.title': 'أقصى درجات الأمان',
            'features.security.desc': 'يتم تشفير ملفاتك وحذفها تلقائيًا بعد المعالجة.',
            'features.speed.title': 'سريع للغاية',
            'features.speed.desc': 'معالجة في ثوانٍ بفضل خوادمنا المحسّنة.',
            'features.accuracy.title': 'دقة مثالية',
            'features.accuracy.desc': 'الحفاظ على التخطيط والتنسيق الأصلي.',
            'features.cloud.title': '100٪ عبر الإنترنت',
            'features.cloud.desc': 'لا حاجة للتثبيت، يمكن الوصول إليه من أي مكان.',
            'features.ai.title': 'مساعد الذكاء الاصطناعي',
            'features.ai.desc': 'دعم ذكي متاح على مدار الساعة طوال أيام الأسبوع.',
            'features.quality.title': 'جودة احترافية',
            'features.quality.desc': 'يستخدمه أكثر من مليون محترف.',
            'testimonials.title': 'يثقون بنا',
            'testimonials.subtitle': 'أكثر من مليون مستخدم راضٍ',
            'testimonials.quote1': '"أداة ممتازة! أستخدم PDF Suite Pro كل يوم في عملي. سريع وموثوق وسهل الاستخدام."',
            'testimonials.author1': 'مريم أحمد',
            'testimonials.role1': 'مديرة مشروع',
            'testimonials.quote2': '"واجهة احترافية للغاية وسهلة الاستخدام. التحويلات ذات جودة استثنائية."',
            'testimonials.author2': 'أحمد محمد',
            'testimonials.role2': 'رجل أعمال',
            'testimonials.quote3': '"توفير كبير في الوقت! أوصي بشدة بـ PDF Suite Pro لجميع زملائي."',
            'testimonials.author3': 'سارة علي',
            'testimonials.role3': 'محامية',
            'cta.title': 'هل أنت مستعد لتحويل ملفات PDF الخاصة بك؟',
            'cta.subtitle': 'انضم إلى أكثر من مليون مستخدم يثقون بـ PDF Suite Pro',
            'cta.button': 'ابدأ مجانًا',
            'footer.tagline': 'مجموعة كاملة لملفات PDF الخاصة بك. سريع وآمن واحترافي.',
            'footer.product': 'المنتج',
            'footer.support': 'الدعم',
            'footer.legal': 'قانوني',
            'footer.help': 'مركز المساعدة',
            'footer.contact': 'اتصل بنا',
            'footer.privacy': 'الخصوصية',
            'footer.terms': 'الشروط',
            'footer.cookies': 'ملفات تعريف الارتباط',
            'footer.copyright': '© 2025 PDF Suite Pro. جميع الحقوق محفوظة.',
            'ai.title': 'مساعد PDF الذكي',
            'ai.welcome': 'مرحبًا! أنا مساعدك الذكي لملفات PDF. كيف يمكنني مساعدتك اليوم؟',
            'ai.quick.merge': 'دمج ملفات PDF',
            'ai.quick.split': 'تقسيم PDF',
            'ai.quick.compress': 'ضغط PDF',
            'ai.placeholder': 'اطرح سؤالك...'
        }
    };

    // ========================================
    // VARIABLES GLOBALES
    // ========================================
    
    let currentLang = localStorage.getItem('language') || 'fr';
    const html = document.documentElement;

    // ========================================
    // FONCTION DE TRADUCTION
    // ========================================
    
    function translatePage(lang) {
        currentLang = lang;
        localStorage.setItem('language', lang);
        
        if (lang === 'ar') {
            html.setAttribute('dir', 'rtl');
            html.setAttribute('lang', 'ar');
        } else {
            html.setAttribute('dir', 'ltr');
            html.setAttribute('lang', lang);
        }
        
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });
        
        document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
            const key = element.getAttribute('data-i18n-placeholder');
            if (translations[lang] && translations[lang][key]) {
                element.placeholder = translations[lang][key];
            }
        });
        
        updateLanguageButton(lang);
    }

    // ========================================
    // MISE À JOUR DU BOUTON DE LANGUE
    // ========================================
    
    function updateLanguageButton(lang) {
        const flags = {
            'fr': '🇫🇷',
            'en': '🇬🇧',
            'es': '🇪🇸',
            'de': '🇩🇪',
            'ar': '🇸🇦'
        };
        
        const langCodes = {
            'fr': 'FR',
            'en': 'EN',
            'es': 'ES',
            'de': 'DE',
            'ar': 'AR'
        };
        
        const currentFlag = document.getElementById('currentFlag');
        const currentLangText = document.getElementById('currentLang');
        
        if (currentFlag && currentLangText) {
            currentFlag.textContent = flags[lang];
            currentLangText.textContent = langCodes[lang];
        }
    }

    // ========================================
    // GESTION DU MENU DE LANGUE
    // ========================================
    
    const languageBtn = document.getElementById('languageBtn');
    const languageMenu = document.getElementById('languageMenu');
    const languageOptions = document.querySelectorAll('.language-option');

    if (languageBtn && languageMenu) {
        languageBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            languageMenu.classList.toggle('active');
        });

        document.addEventListener('click', () => {
            languageMenu.classList.remove('active');
        });

        languageMenu.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    }

    languageOptions.forEach(option => {
        option.addEventListener('click', () => {
            const lang = option.getAttribute('data-lang');
            translatePage(lang);
            languageMenu.classList.remove('active');
        });
    });

    // ========================================
    // GESTION DU MENU MOBILE
    // ========================================
    
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = mobileMenuBtn.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // ========================================
    // GESTION DU MODAL ASSISTANT IA
    // ========================================
    
    const assistantBtn = document.getElementById('assistantBtn');
    const footerAssistantBtn = document.getElementById('footerAssistantBtn');
    const assistantModal = document.getElementById('assistantModal');
    const closeAssistant = document.getElementById('closeAssistant');
    const chatContainer = document.getElementById('chatContainer');
    const chatInput = document.getElementById('chatInput');
    const sendBtn = document.getElementById('sendBtn');

    function openAssistant() {
        if (assistantModal) {
            assistantModal.classList.add('active');
        }
    }

    function closeAssistantModal() {
        if (assistantModal) {
            assistantModal.classList.remove('active');
        }
    }

    if (assistantBtn) {
        assistantBtn.addEventListener('click', openAssistant);
    }

    if (footerAssistantBtn) {
        footerAssistantBtn.addEventListener('click', (e) => {
            e.preventDefault();
            openAssistant();
        });
    }

    if (closeAssistant) {
        closeAssistant.addEventListener('click', closeAssistantModal);
    }

    if (assistantModal) {
        assistantModal.addEventListener('click', (e) => {
            if (e.target === assistantModal) {
                closeAssistantModal();
            }
        });
    }

    const quickActionBtns = document.querySelectorAll('.quick-action-btn');
    quickActionBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const action = btn.textContent.trim();
            addUserMessage(action);
            setTimeout(() => {
                addAIResponse(action);
            }, 1000);
        });
    });

    function sendMessage() {
        const message = chatInput.value.trim();
        if (message) {
            addUserMessage(message);
            chatInput.value = '';
            setTimeout(() => {
                addAIResponse(message);
            }, 1000);
        }
    }

    if (sendBtn) {
        sendBtn.addEventListener('click', sendMessage);
    }

    if (chatInput) {
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }

    function addUserMessage(message) {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'user-message';
        messageDiv.innerHTML = `
            <div class="message-bubble user-bubble">
                ${message}
            </div>
        `;
        chatContainer.appendChild(messageDiv);
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }

    function addAIResponse(userMessage) {
        const responses = {
            'default': translations[currentLang]['ai.welcome']
        };
        
        const response = responses['default'];
        
        const messageDiv = document.createElement('div');
        messageDiv.className = 'ai-message';
        messageDiv.innerHTML = `
            <div class="ai-avatar">
                <i class="fas fa-robot"></i>
            </div>
            <div class="message-bubble ai-bubble">
                ${response}
            </div>
        `;
        chatContainer.appendChild(messageDiv);
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }

    // ========================================
    // GESTION DES BOUTONS CONNEXION/INSCRIPTION
    // ========================================
    
    const loginBtn = document.getElementById('loginBtn');
    const signupBtn = document.getElementById('signupBtn');

    if (loginBtn) {
        loginBtn.addEventListener('click', () => {
            alert('Redirection vers la page de connexion (à configurer)');
        });
    }

    if (signupBtn) {
        signupBtn.addEventListener('click', () => {
            alert('Redirection vers la page d\'inscription (à configurer)');
        });
    }

    // ========================================
    // SCROLL ANIMATIONS
    // ========================================
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.tool-card, .feature-card, .testimonial-card').forEach(el => {
        observer.observe(el);
    });

    // ========================================
    // SMOOTH SCROLL
    // ========================================
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                }
            }
        });
    });

    // ========================================
    // INITIALISATION
    // ========================================
    
    translatePage(currentLang);
    
    console.log('PDF Suite Pro initialized successfully! 🚀');

})();
