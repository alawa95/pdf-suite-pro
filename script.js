/* ========================================
   PDF Suite Pro - JavaScript Complet
   Avec traductions pour toutes les langues et support RTL
   ======================================== */

(function() {
    'use strict';

    // Traductions complètes
    const translations = {
        fr: {
            logo: 'PDF Suite Pro',
            'nav.tools': 'Outils',
            'nav.features': 'Fonctionnalités',
            'nav.pricing': 'Tarifs',
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
            'features.speed.desc': 'Traitement en quelques secondes.',
            'features.accuracy.title': 'Précision parfaite',
            'features.accuracy.desc': 'Préservation de la mise en page originale.',
            'features.cloud.title': '100% en ligne',
            'features.cloud.desc': 'Aucune installation requise.',
            'features.ai.title': 'Assistant IA',
            'features.ai.desc': 'Support intelligent 24/7.',
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
            'footer.privacy': 'Confidentialité',
            'footer.terms': 'Conditions',
            'footer.cookies': 'Cookies',
            'footer.help': 'Centre d\'aide',
            'footer.contact': 'Contact',
            'footer.copyright': '© 2025 PDF Suite Pro. Tous droits réservés.',
            'ai.title': 'Assistant IA PDF',
            'ai.welcome': 'Bonjour ! Je suis votre assistant IA pour les PDF. Comment puis-je vous aider aujourd\'hui ?',
            'ai.quick.merge': 'Fusionner des PDF',
            'ai.quick.split': 'Diviser un PDF',
            'ai.quick.compress': 'Compresser un PDF',
            'ai.placeholder': 'Posez votre question...'
        },
        en: {
            logo: 'PDF Suite Pro',
            'nav.tools': 'Tools',
            'nav.features': 'Features',
            'nav.pricing': 'Pricing',
            'nav.assistant': 'AI Assistant',
            'hero.title': 'All your PDF tools in one place',
            'hero.subtitle': 'Merge, split, compress and convert your PDF files for free and securely',
            'hero.merge': 'Merge PDFs',
            'hero.split': 'Split a PDF',
            'hero.secure': '100% Secure',
            'hero.cloud': 'Cloud processing',
            'hero.unlimited': 'Unlimited use',
            'hero.card.title': 'Document.pdf',
            'hero.card.subtitle': 'Ready to process',
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
            'tools.split.desc': 'Split PDF into multiple files',
            'tools.compress.title': 'Compress PDF',
            'tools.compress.desc': 'Reduce PDF size',
            'tools.rotate.title': 'Rotate PDF',
            'tools.rotate.desc': 'Rotate PDF pages',
            'tools.protect.title': 'Protect PDF',
            'tools.protect.desc': 'Add password',
            'tools.unlock.title': 'Unlock PDF',
            'tools.unlock.desc': 'Remove PDF password',
            'tools.sign.title': 'Sign PDF',
            'tools.sign.desc': 'Add digital signature',
            'tools.watermark.title': 'Watermark',
            'tools.watermark.desc': 'Add watermark to PDF',
            'tools.edit.title': 'Edit PDF',
            'tools.edit.desc': 'Edit text and images',
            'tools.button': 'Use now',
            'badge.free': 'Free',
            'badge.premium': 'Premium',
            'features.title': 'Why choose PDF Suite Pro?',
            'features.subtitle': 'Discover what makes PDF Suite Pro unique',
            'features.security.title': 'Maximum security',
            'features.security.desc': 'Your files are encrypted and automatically deleted after processing.',
            'features.speed.title': 'Ultra-fast',
            'features.speed.desc': 'Processing in seconds.',
            'features.accuracy.title': 'Perfect accuracy',
            'features.accuracy.desc': 'Preserves original layout.',
            'features.cloud.title': '100% online',
            'features.cloud.desc': 'No installation required.',
            'features.ai.title': 'AI Assistant',
            'features.ai.desc': 'Intelligent support 24/7.',
            'features.quality.title': 'Pro quality',
            'features.quality.desc': 'Used by over a million professionals.',
            'testimonials.title': 'They trust us',
            'testimonials.subtitle': 'Over 1 million satisfied users',
            'testimonials.quote1': '"Excellent tool! I use PDF Suite Pro every day for my work. Fast, reliable and very intuitive."',
            'testimonials.author1': 'Marie Dupont',
            'testimonials.role1': 'Project Manager',
            'testimonials.quote2': '"Very professional and easy to use interface. The conversions are of exceptional quality."',
            'testimonials.author2': 'Jean Martin',
            'testimonials.role2': 'Entrepreneur',
            'testimonials.quote3': '"A considerable time saver! I highly recommend PDF Suite Pro to all my colleagues."',
            'testimonials.author3': 'Sophie Bernard',
            'testimonials.role3': 'Lawyer',
            'cta.title': 'Ready to transform your PDFs?',
            'cta.subtitle': 'Join over a million users who trust PDF Suite Pro',
            'cta.button': 'Start for free',
            'footer.tagline': 'Complete suite for your PDFs. Fast, secure, professional.',
            'footer.product': 'Product',
            'footer.support': 'Support',
            'footer.legal': 'Legal',
            'footer.privacy': 'Privacy',
            'footer.terms': 'Terms',
            'footer.cookies': 'Cookies',
            'footer.help': 'Help Center',
            'footer.contact': 'Contact',
            'footer.copyright': '© 2025 PDF Suite Pro. All rights reserved.',
            'ai.title': 'PDF AI Assistant',
            'ai.welcome': 'Hello! I am your AI assistant for PDFs. How can I help you today?',
            'ai.quick.merge': 'Merge PDFs',
            'ai.quick.split': 'Split a PDF',
            'ai.quick.compress': 'Compress a PDF',
            'ai.placeholder': 'Ask your question...'
        },
        es: {
            logo: 'PDF Suite Pro',
            'nav.tools': 'Herramientas',
            'nav.features': 'Características',
            'nav.pricing': 'Precios',
            'nav.assistant': 'Asistente IA',
            'hero.title': 'Todas sus herramientas PDF en un solo lugar',
            'hero.subtitle': 'Fusionar, dividir, comprimir y convertir sus archivos PDF de forma gratuita y segura',
            'hero.merge': 'Fusionar PDFs',
            'hero.split': 'Dividir un PDF',
            'hero.secure': '100% Seguro',
            'hero.cloud': 'Procesamiento en la nube',
            'hero.unlimited': 'Uso ilimitado',
            'hero.card.title': 'Document.pdf',
            'hero.card.subtitle': 'Listo para procesar',
            'tools.title': 'Herramientas PDF populares',
            'tools.subtitle': 'Elija la herramienta que necesita',
            'tools.pdfToWord.title': 'PDF a Word',
            'tools.pdfToWord.desc': 'Convertir PDF a Word editable',
            'tools.wordToPdf.title': 'Word a PDF',
            'tools.wordToPdf.desc': 'Convertir documentos Word a PDF',
            'tools.jpgToPdf.title': 'JPG a PDF',
            'tools.jpgToPdf.desc': 'Convertir imágenes a PDF',
            'tools.merge.title': 'Fusionar PDF',
            'tools.merge.desc': 'Combinar múltiples PDFs',
            'tools.split.title': 'Dividir PDF',
            'tools.split.desc': 'Dividir PDF en múltiples archivos',
            'tools.compress.title': 'Comprimir PDF',
            'tools.compress.desc': 'Reducir el tamaño del PDF',
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
            'features.subtitle': 'Descubra lo que hace único a PDF Suite Pro',
            'features.security.title': 'Seguridad máxima',
            'features.security.desc': 'Sus archivos están encriptados y se eliminan automáticamente después del procesamiento.',
            'features.speed.title': 'Ultra-rápido',
            'features.speed.desc': 'Procesamiento en segundos.',
            'features.accuracy.title': 'Precisión perfecta',
            'features.accuracy.desc': 'Conserva el diseño original.',
            'features.cloud.title': '100% en línea',
            'features.cloud.desc': 'No requiere instalación.',
            'features.ai.title': 'Asistente IA',
            'features.ai.desc': 'Soporte inteligente 24/7.',
            'features.quality.title': 'Calidad pro',
            'features.quality.desc': 'Utilizado por más de un millón de profesionales.',
            'testimonials.title': 'Nos confían',
            'testimonials.subtitle': 'Más de 1 millón de usuarios satisfechos',
            'testimonials.quote1': '"¡Excelente herramienta! Uso PDF Suite Pro todos los días para mi trabajo. Rápido, fiable y muy intuitivo."',
            'testimonials.author1': 'Marie Dupont',
            'testimonials.role1': 'Gerente de proyecto',
            'testimonials.quote2': '"Interfaz muy profesional y fácil de usar. Las conversiones son de calidad excepcional."',
            'testimonials.author2': 'Jean Martin',
            'testimonials.role2': 'Emprendedor',
            'testimonials.quote3': '"¡Un ahorro de tiempo considerable! Recomiendo encarecidamente PDF Suite Pro a todos mis colegas."',
            'testimonials.author3': 'Sophie Bernard',
            'testimonials.role3': 'Abogada',
            'cta.title': '¿Listo para transformar sus PDFs?',
            'cta.subtitle': 'Únase a más de un millón de usuarios que confían en PDF Suite Pro',
            'cta.button': 'Comenzar gratis',
            'footer.tagline': 'Suite completa para sus PDFs. Rápida, segura, profesional.',
            'footer.product': 'Producto',
            'footer.support': 'Soporte',
            'footer.legal': 'Legal',
            'footer.privacy': 'Privacidad',
            'footer.terms': 'Términos',
            'footer.cookies': 'Cookies',
            'footer.help': 'Centro de ayuda',
            'footer.contact': 'Contacto',
            'footer.copyright': '© 2025 PDF Suite Pro. Todos los derechos reservados.',
            'ai.title': 'Asistente IA PDF',
            'ai.welcome': '¡Hola! Soy su asistente IA para PDFs. ¿Cómo puedo ayudarle hoy?',
            'ai.quick.merge': 'Fusionar PDFs',
            'ai.quick.split': 'Dividir un PDF',
            'ai.quick.compress': 'Comprimir un PDF',
            'ai.placeholder': 'Haga su pregunta...'
        },
        de: {
            logo: 'PDF Suite Pro',
            'nav.tools': 'Werkzeuge',
            'nav.features': 'Funktionen',
            'nav.pricing': 'Preise',
            'nav.assistant': 'KI-Assistent',
            'hero.title': 'Alle Ihre PDF-Tools an einem Ort',
            'hero.subtitle': 'Zusammenführen, teilen, komprimieren und konvertieren Sie Ihre PDF-Dateien kostenlos und sicher',
            'hero.merge': 'PDFs zusammenführen',
            'hero.split': 'PDF teilen',
            'hero.secure': '100% Sicher',
            'hero.cloud': 'Cloud-Verarbeitung',
            'hero.unlimited': 'Unbegrenzte Nutzung',
            'hero.card.title': 'Document.pdf',
            'hero.card.subtitle': 'Bereit zur Verarbeitung',
            'tools.title': 'Beliebte PDF-Tools',
            'tools.subtitle': 'Wählen Sie das Tool, das Sie benötigen',
            'tools.pdfToWord.title': 'PDF zu Word',
            'tools.pdfToWord.desc': 'PDF in bearbeitbares Word konvertieren',
            'tools.wordToPdf.title': 'Word zu PDF',
            'tools.wordToPdf.desc': 'Word-Dokumente zu PDF konvertieren',
            'tools.jpgToPdf.title': 'JPG zu PDF',
            'tools.jpgToPdf.desc': 'Bilder zu PDF konvertieren',
            'tools.merge.title': 'PDF zusammenführen',
            'tools.merge.desc': 'Mehrere PDFs kombinieren',
            'tools.split.title': 'PDF teilen',
            'tools.split.desc': 'PDF in mehrere Dateien teilen',
            'tools.compress.title': 'PDF komprimieren',
            'tools.compress.desc': 'PDF-Größe reduzieren',
            'tools.rotate.title': 'PDF drehen',
            'tools.rotate.desc': 'PDF-Seiten drehen',
            'tools.protect.title': 'PDF schützen',
            'tools.protect.desc': 'Passwort hinzufügen',
            'tools.unlock.title': 'PDF entsperren',
            'tools.unlock.desc': 'PDF-Passwort entfernen',
            'tools.sign.title': 'PDF signieren',
            'tools.sign.desc': 'Digitale Signatur hinzufügen',
            'tools.watermark.title': 'Wasserzeichen',
            'tools.watermark.desc': 'Wasserzeichen zum PDF hinzufügen',
            'tools.edit.title': 'PDF bearbeiten',
            'tools.edit.desc': 'Text und Bilder bearbeiten',
            'tools.button': 'Jetzt verwenden',
            'badge.free': 'Kostenlos',
            'badge.premium': 'Premium',
            'features.title': 'Warum PDF Suite Pro wählen?',
            'features.subtitle': 'Entdecken Sie, was PDF Suite Pro einzigartig macht',
            'features.security.title': 'Maximale Sicherheit',
            'features.security.desc': 'Ihre Dateien werden verschlüsselt und automatisch nach der Verarbeitung gelöscht.',
            'features.speed.title': 'Ultra-schnell',
            'features.speed.desc': 'Verarbeitung in Sekunden.',
            'features.accuracy.title': 'Perfekte Genauigkeit',
            'features.accuracy.desc': 'Erhält das Original-Layout.',
            'features.cloud.title': '100% online',
            'features.cloud.desc': 'Keine Installation erforderlich.',
            'features.ai.title': 'KI-Assistent',
            'features.ai.desc': 'Intelligenter Support 24/7.',
            'features.quality.title': 'Pro-Qualität',
            'features.quality.desc': 'Von über einer Million Profis verwendet.',
            'testimonials.title': 'Sie vertrauen uns',
            'testimonials.subtitle': 'Über 1 Million zufriedene Benutzer',
            'testimonials.quote1': '"Ausgezeichnetes Tool! Ich verwende PDF Suite Pro täglich für meine Arbeit. Schnell, zuverlässig und sehr intuitiv."',
            'testimonials.author1': 'Marie Dupont',
            'testimonials.role1': 'Projektmanager',
            'testimonials.quote2': '"Sehr professionelle und benutzerfreundliche Oberfläche. Die Konvertierungen sind von außergewöhnlicher Qualität."',
            'testimonials.author2': 'Jean Martin',
            'testimonials.role2': 'Unternehmer',
            'testimonials.quote3': '"Eine erhebliche Zeitersparnis! Ich empfehle PDF Suite Pro allen meinen Kollegen wärmstens."',
            'testimonials.author3': 'Sophie Bernard',
            'testimonials.role3': 'Anwältin',
            'cta.title': 'Bereit, Ihre PDFs zu transformieren?',
            'cta.subtitle': 'Schließen Sie sich über einer Million Benutzern an, die PDF Suite Pro vertrauen',
            'cta.button': 'Kostenlos starten',
            'footer.tagline': 'Komplette Suite für Ihre PDFs. Schnell, sicher, professionell.',
            'footer.product': 'Produkt',
            'footer.support': 'Support',
            'footer.legal': 'Rechtlich',
            'footer.privacy': 'Datenschutz',
            'footer.terms': 'Bedingungen',
            'footer.cookies': 'Cookies',
            'footer.help': 'Hilfezentrum',
            'footer.contact': 'Kontakt',
            'footer.copyright': '© 2025 PDF Suite Pro. Alle Rechte vorbehalten.',
            'ai.title': 'PDF KI-Assistent',
            'ai.welcome': 'Hallo! Ich bin Ihr KI-Assistent für PDFs. Wie kann ich Ihnen heute helfen?',
            'ai.quick.merge': 'PDFs zusammenführen',
            'ai.quick.split': 'PDF teilen',
            'ai.quick.compress': 'PDF komprimieren',
            'ai.placeholder': 'Stellen Sie Ihre Frage...'
        },
        ar: {
            logo: 'PDF Suite Pro',
            'nav.tools': 'الأدوات',
            'nav.features': 'الميزات',
            'nav.pricing': 'التسعير',
            'nav.assistant': 'مساعد الذكاء الاصطناعي',
            'hero.title': 'جميع أدوات PDF الخاصة بك في مكان واحد',
            'hero.subtitle': 'ادمج، اقسم، اضغط وتحويل ملفات PDF مجانًا وبأمان',
            'hero.merge': 'دمج PDF',
            'hero.split': 'تقسيم PDF',
            'hero.secure': '100% آمن',
            'hero.cloud': 'معالجة سحابية',
            'hero.unlimited': 'استخدام غير محدود',
            'hero.card.title': 'Document.pdf',
            'hero.card.subtitle': 'جاهز للمعالجة',
            'tools.title': 'أدوات PDF شائعة',
            'tools.subtitle': 'اختر الأداة التي تحتاجها',
            'tools.pdfToWord.title': 'PDF إلى Word',
            'tools.pdfToWord.desc': 'تحويل PDF إلى Word قابل للتحرير',
            'tools.wordToPdf.title': 'Word إلى PDF',
            'tools.wordToPdf.desc': 'تحويل مستندات Word إلى PDF',
            'tools.jpgToPdf.title': 'JPG إلى PDF',
            'tools.jpgToPdf.desc': 'تحويل الصور إلى PDF',
            'tools.merge.title': 'دمج PDF',
            'tools.merge.desc': 'دمج عدة PDF',
            'tools.split.title': 'تقسيم PDF',
            'tools.split.desc': 'فصل PDF إلى عدة ملفات',
            'tools.compress.title': 'ضغط PDF',
            'tools.compress.desc': 'تقليل حجم PDF',
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
            'badge.premium': 'بريميوم',
            'features.title': 'لماذا تختار PDF Suite Pro؟',
            'features.subtitle': 'اكتشف ما يجعل PDF Suite Pro فريدًا',
            'features.security.title': 'أمان قصوى',
            'features.security.desc': 'يتم تشفير ملفاتك وحذفها تلقائيًا بعد المعالجة.',
            'features.speed.title': 'سريع جدًا',
            'features.speed.desc': 'معالجة في ثوانٍ.',
            'features.accuracy.title': 'دقة مثالية',
            'features.accuracy.desc': 'يحافظ على التصميم الأصلي.',
            'features.cloud.title': '100% عبر الإنترنت',
            'features.cloud.desc': 'لا يتطلب تثبيت.',
            'features.ai.title': 'مساعد الذكاء الاصطناعي',
            'features.ai.desc': 'دعم ذكي 24/7.',
            'features.quality.title': 'جودة محترفة',
            'features.quality.desc': 'يستخدمه أكثر من مليون محترف.',
            'testimonials.title': 'يثقون بنا',
            'testimonials.subtitle': 'أكثر من مليون مستخدم راضٍ',
            'testimonials.quote1': '"أداة ممتازة! أستخدم PDF Suite Pro كل يوم في عملي. سريع، موثوق وسهل الاستخدام."',
            'testimonials.author1': 'ماري دوبونت',
            'testimonials.role1': 'مدير مشروع',
            'testimonials.quote2': '"واجهة احترافية جدًا وسهلة الاستخدام. التحويلات ذات جودة استثنائية."',
            'testimonials.author2': 'جان مارتن',
            'testimonials.role2': 'رجل أعمال',
            'testimonials.quote3': '"توفير وقت كبير! أوصي بشدة بـ PDF Suite Pro لجميع زملائي."',
            'testimonials.author3': 'صوفي برنارد',
            'testimonials.role3': 'محامية',
            'cta.title': 'هل أنت جاهز لتحويل ملفات PDF الخاصة بك؟',
            'cta.subtitle': 'انضم إلى أكثر من مليون مستخدم يثقون في PDF Suite Pro',
            'cta.button': 'ابدأ مجانًا',
            'footer.tagline': 'مجموعة كاملة لملفات PDF الخاصة بك. سريعة، آمنة، محترفة.',
            'footer.product': 'المنتج',
            'footer.support': 'الدعم',
            'footer.legal': 'قانوني',
            'footer.privacy': 'الخصوصية',
            'footer.terms': 'الشروط',
            'footer.cookies': 'ملفات تعريف الارتباط',
            'footer.help': 'مركز المساعدة',
            'footer.contact': 'اتصال',
            'footer.copyright': '© 2025 PDF Suite Pro. جميع الحقوق محفوظة.',
            'ai.title': 'مساعد PDF الذكي',
            'ai.welcome': 'مرحبا! أنا مساعدك الذكي لـ PDF. كيف يمكنني مساعدتك اليوم؟',
            'ai.quick.merge': 'دمج PDF',
            'ai.quick.split': 'تقسيم PDF',
            'ai.quick.compress': 'ضغط PDF',
            'ai.placeholder': 'اطرح سؤالك...'
        }
    };

    let currentLang = 'fr';

    // Fonction pour appliquer la traduction et RTL
    function applyTranslations(lang) {
        currentLang = lang;
        document.documentElement.lang = lang;
        document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';
        
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });
        
        // Mise à jour du bouton langue
        const flags = {
            fr: '🇫🇷',
            en: '🇬🇧',
            es: '🇪🇸',
            de: '🇩🇪',
            ar: '🇸🇦'
        };
        document.getElementById('currentFlag').textContent = flags[lang] || '🌍';
        document.getElementById('currentLang').textContent = lang.toUpperCase();
        
        // Mise à jour des placeholders
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (translations[lang][key]) {
                el.placeholder = translations[lang][key];
            }
        });
    }

    // Initialisation
    applyTranslations('fr');

    // GESTION DU MENU MOBILE
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.querySelector('.nav-links');

    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = mobileMenuBtn.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });

    // GESTION DU MENU DE LANGUE
    const languageBtn = document.getElementById('languageBtn');
    const languageMenu = document.getElementById('languageMenu');
    const languageOptions = document.querySelectorAll('.language-option');

    languageBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        languageMenu.classList.toggle('active');
    });

    document.addEventListener('click', () => {
        languageMenu.classList.remove('active');
    });

    languageOptions.forEach(option => {
        option.addEventListener('click', (e) => {
            e.stopPropagation();
            const lang = option.getAttribute('data-lang');
            applyTranslations(lang);
            languageMenu.classList.remove('active');
        });
    });

    // GESTION DE L'ASSISTANT IA
    const assistantBtn = document.getElementById('assistantBtn');
    const footerAssistantBtn = document.getElementById('footerAssistantBtn');
    const assistantModal = document.getElementById('assistantModal');
    const closeAssistant = document.getElementById('closeAssistant');
    const chatInput = document.getElementById('chatInput');
    const sendBtn = document.getElementById('sendBtn');
    const chatContainer = document.getElementById('chatContainer');

    function openAssistant() {
        assistantModal.classList.add('active');
        chatInput.focus();
    }

    function closeAssistantModal() {
        assistantModal.classList.remove('active');
    }

    assistantBtn.addEventListener('click', openAssistant);
    footerAssistantBtn.addEventListener('click', (e) => {
        e.preventDefault();
        openAssistant();
    });
    closeAssistant.addEventListener('click', closeAssistantModal);
    assistantModal.addEventListener('click', (e) => {
        if (e.target === assistantModal) closeAssistantModal();
    });

    // GESTION DU CHAT IA
    function addMessage(message, isUser = false) {
        const messageDiv = document.createElement('div');
        messageDiv.className = isUser ? 'user-message' : 'ai-message';
        messageDiv.innerHTML = isUser 
            ? `<div class="message-bubble user-bubble"><p>${message}</p></div>`
            : `<div class="ai-avatar"><i class="fas fa-robot"></i></div><div class="message-bubble ai-bubble"><p>${message}</p></div>`;
        chatContainer.appendChild(messageDiv);
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }

    function getAIResponse(userMessage) {
        const message = userMessage.toLowerCase();
        const responses = translations[currentLang];
        if (message.includes('fusionner') || message.includes('merge')) {
            return responses['ai.response.merge'] || 'Pour fusionner des PDF, utilisez notre outil Fusionner PDF.';
        } // Ajoute d'autres conditions similaires
        return responses['ai.fallback'] || 'Je suis là pour vous aider. Pouvez-vous préciser ?';
    }

    function sendMessage() {
        const message = chatInput.value.trim();
        if (message) {
            addMessage(message, true);
            chatInput.value = '';
            setTimeout(() => {
                addMessage(getAIResponse(message));
            }, 800);
        }
    }

    sendBtn.addEventListener('click', sendMessage);
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendMessage();
    });

    // Quick actions
    document.querySelectorAll('.quick-action-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const text = btn.querySelector('span').textContent;
            addMessage(text, true);
            setTimeout(() => addMessage(getAIResponse(text)), 800);
        });
    });

    // GESTION DES BOUTONS D'OUTILS
    document.querySelectorAll('.tool-card .btn-primary').forEach(button => {
        button.addEventListener('click', () => {
            const toolName = button.closest('.tool-card').querySelector('h3').textContent;
            console.log(`Ouverture de ${toolName}`); // Remplace par une action réelle
        });
    });

    // ANIMATIONS ET SCROLL
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('fade-in');
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.tool-card, .feature-card, .testimonial-card').forEach(card => observer.observe(card));

    // SMOOTH SCROLL
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', e => {
            e.preventDefault();
            document.querySelector(anchor.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
        });
    });

    console.log('PDF Suite Pro chargé !');
})();
