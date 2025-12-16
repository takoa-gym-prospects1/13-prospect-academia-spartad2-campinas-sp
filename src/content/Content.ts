// ==================================================================================
// CENTRAL DE IMAGENS DO SITE
// Organize aqui todas as imagens utilizadas no projeto.
// As imagens devem estar na pasta 'public/images'.
// ==================================================================================
const AssetImages = {
    hero: {
        background: {
            src: "/images/hero-desktop.webp",
            mobileSrc: "/images/hero-mobile.webp",
            dim: "1920x1080 (Desktop) / 1080x1920 (Mobile) - Imagem de impacto, alta qualidade"
        }
    },
    services: {
        forca: {
            src: "/images/hipertrofia.webp",
            dim: "600x800 - Orientação vertical (Retrato)"
        },
        zumba: {
            src: "/images/emagrecimento.webp",
            dim: "600x800 - Orientação vertical (Retrato)"
        },
        yoga: {
            src: "/images/forca.webp",
            dim: "600x800 - Orientação vertical (Retrato)"
        }
    },
    health: {
        before: {
            src: "/images/before.webp",
            dim: "600x800 - Foto de 'Antes', vertical"
        },
        after: {
            src: "/images/after.webp",
            dim: "600x800 - Foto de 'Depois', vertical"
        }
    },
    schedule: {
        background: {
            src: "/images/schedule-bg.webp",
            dim: "1920x1080 - Imagem de fundo suave/escurecida"
        }
    },
    bmi: {
        background: {
            src: "/images/bmi-bg.webp",
            dim: "1920x1080 (Ou recorte lateral) - Foco no lado direito"
        },
        mobileBackground: {
            src: "/images/bmi-bg-mobile.webp",
            dim: "750x1600+ (Retrato Longo) - A seção é muito alta no mobile, use uma imagem alongada."
        }
    },

    testimonials: {
        background: {
            src: "/images/testimonials-bg.webp",
            dim: "1920x1080 - Fundo para seção de depoimentos"
        },
        person1: { src: "/images/testimonial1.webp", dim: "150x150 - Foto de perfil (Rosto)" },
        person2: { src: "/images/testimonial2.webp", dim: "150x150 - Foto de perfil (Rosto)" },
        person3: { src: "/images/testimonial3.webp", dim: "150x150 - Foto de perfil (Rosto)" }
    },
    brands: {
        brand1: { src: "/images/brand-1.webp", dim: "150x50 - Logo de parceiro" },
        brand2: { src: "/images/brand-2.webp", dim: "150x50 - Logo de parceiro" },
        brand3: { src: "/images/brand-3.webp", dim: "150x50 - Logo de parceiro" },
        brand4: { src: "/images/brand-4.webp", dim: "150x50 - Logo de parceiro" },
        brand5: { src: "/images/brand-5.webp", dim: "150x50 - Logo de parceiro" }
    },
    seo: {
        preview: {
            src: "/images/preview.webp",
            dim: "1200x630 - Imagem de compartilhamento (Facebook/WhatsApp)"
        }
    }
};

export const Content = {
    // ==================================================================================
    // CONFIGURAÇÕES GERAIS, TEMA E MÓDULOS
    // ==================================================================================
    theme: {
        colors: {
            primary: "#FB7620", // Cor principal (botões, destaques, ícones) - Ex: Rosa vibrante
            secondary: "#1a1a1a", // Cor secundária
            background: "#0b0b0b", // Cor de fundo principal (Dark mode)
            cardBackground: "#141414", // Cor de fundo de cartões/seções
            text: "#ffffff", // Cor do texto principal
            textMuted: "#a0a0a0", // Cor do texto secundário/parágrafos
        },
        fonts: {
            main: "'Barlow', sans-serif", // Fonte principal importada no CSS
        }
    },

    seo: {
        title: "Sparta Gym Academia - Sua melhor forma em 2026",
        description: "Academia completa em Campinas com musculação, aulas coletivas e acompanhamento personalizado. Comece sua transformação hoje!",
        keywords: "academia, fitness, musculação, crossfit, yoga, saúde, emagrecimento, campinas",
        language: "pt-br",
        image: AssetImages.seo.preview.src
    },

    contact: {
        address: "R. Dusolina Tournieux, 468 - Vila União, Campinas - SP",
        mapsLink: "https://maps.app.goo.gl/J9EA78v7s5WNNCEL7",
        phone: "(19) 99777-3907",
        whatsapp: "(19) 99777-3907",
        whatsappRaw: "5519997773907",
        whatsappMessage: "Olá! Vim pelo site e gostaria de me matricular na academia.",
        email: "contato@spartagym.com.br"
    },

    // ==================================================================================
    // BARRA DE NAVEGAÇÃO
    // ==================================================================================
    navbar: {
        logo: {
            text: "SPARTA ",
            highlight: "GYM",
            img: ""
        },
        links: [
            { name: 'Home', href: '#home', sectionKey: 'hero' },
            { name: 'Modalidades', href: '#services', sectionKey: 'services' },
            { name: 'Sobre Nós', href: '#health', sectionKey: 'health' },
            { name: 'Planos', href: '#pricing', sectionKey: 'pricing' },
            { name: 'Calcular meu IMC', href: '#bmi', sectionKey: 'bmi' },
        ],
        actions: {
            loginText: "Login",
            joinText: "MATRICULE-SE",
            joinMessage: "Olá! Vim pelo site e gostaria de me matricular na academia."
        }
    },

    // ==================================================================================
    // SEÇÕES (MÓDULOS)
    // ==================================================================================

    hero: {
        enabled: true,
        backgroundImage: AssetImages.hero.background.src,
        mobileBackgroundImage: AssetImages.hero.background.mobileSrc,
        title: {
            line1: "Comece 2026 Em Forma:",
            highlight: "Garanta Sua Matrícula Com Desconto"
        },
        subtitle: "Equipamentos modernos, professores com CREF e ambiente climatizado. Do iniciante ao avançado, temos o treino ideal pra você.",
        microText: ["✓ Sem taxa de matrícula", "✓ Cancele quando quiser"],
        buttonText: "QUERO CONHECER A ACADEMIA"
    },

    services: {
        enabled: true,
        // (Modalidades)
        items: [
            {
                id: 1,
                title: 'HIPERTROFIA',
                description: 'Ganhe massa muscular com treinos de alto volume e técnicas avançadas. Acompanhamento profissional para maximizar seus ganhos.',
                image: AssetImages.services.forca.src,
                iconType: 'muscle' // Ícone corresponde ao emoji 💪
            },
            {
                id: 2,
                title: 'EMAGRECIMENTO',
                description: 'Perca gordura preservando músculo. Treinos metabólicos combinados com musculação tradicional para resultados mais rápidos.',
                image: AssetImages.services.zumba.src,
                iconType: 'fire' // Ícone corresponde ao emoji 🔥
            },
            {
                id: 3,
                title: 'FORÇA E PERFORMANCE',
                description: 'Aumente sua força com treinos focados em cargas progressivas. Ideal para quem busca superar limites e bater recordes pessoais.',
                image: AssetImages.services.yoga.src,
                iconType: 'weightlifting' // Ícone corresponde ao emoji 🏋️
            }
        ]
    },

    health: {
        enabled: true,
        // (Sobre Nós / Por que Treinar)
        watermarkText: "SPARTA GYM",
        title: {
            line1: "Por Que Treinar na",
            highlight: "Sparta Gym?"
        },
        // O texto original foi substituído por cards de benefícios abaixo.
        // Vou manter 'description' como fallback ou intro se necessário, mas o foco são os cards.
        description: "Mais do que uma academia, somos seu parceiro na busca por saúde e bem-estar.",

        cards: [
            {
                title: "EQUIPAMENTOS MODERNOS",
                text: "Mais de 50 aparelhos de musculação, esteiras, bicicletas e área de funcional completa. Manutenção semanal para sua segurança.",
                icon: "dumbbell"
            },
            {
                title: "PROFESSORES CERTIFICADOS",
                text: "Equipe de educadores físicos com CREF ativo, especializados em treino personalizado e acompanhamento individualizado.",
                icon: "certificate"
            },
            {
                title: "AMBIENTE CLIMATIZADO",
                text: "Ar-condicionado em todas as áreas, vestiários com chuveiro, armários rotativos e Wi-Fi gratuito para você treinar com conforto.",
                icon: "snowflake"
            }
        ],

        buttonText: "Quero Conhecer a Academia",
        images: {
            before: AssetImages.health.before.src,
            after: AssetImages.health.after.src
        }
    },

    schedule: {
        enabled: false,
        backgroundImage: AssetImages.schedule.background.src,
        title: {
            line1: "Horários das",
            highlight: "Aulas"
        },
        subtitle: "Aulas em grupo todos os dias. Escolha o melhor horário para sua rotina!"
    },

    pricing: {
        enabled: true,
        title: {
            line1: "Escolha Seu",
            highlight: "Plano"
        },
        subtitle: "Sem taxa de matrícula. Cancele quando quiser.",
        plans: [
            {
                name: 'Anual',
                price: '79,99',
                period: '/mês',
                features: [
                    'Acesso ilimitado à musculação',
                    'Pagamento: R$ 960 à vista ou 12x R$ 79,99',
                    '1 mês GRÁTIS (pague 11, treine 12)',
                    'Economia de R$ 240 no ano',
                    'Avaliação física mensal inclusa'
                ],
                isPopular: true,
                badgeText: "MAIS ESCOLHIDO",
                buttonText: "Quero Economizar"
            },
            {
                name: 'Recorrente',
                price: '89,99',
                period: '/mês',
                features: [
                    'Acesso ilimitado à musculação',
                    'Renovação automática',
                    'Cancele quando quiser (aviso 30 dias)',
                    'Sem surpresas: mesmo valor todo mês',
                    'Ideal para quem quer flexibilidade'
                ],
                isPopular: false,
                badgeText: "MAIS FLEXÍVEL",
                buttonText: "Quero Flexibilidade"
            },
            {
                name: 'Mensal',
                price: '99,99',
                period: '/mês',
                features: [
                    'Acesso ilimitado à musculação',
                    'Pague apenas quando usar',
                    'Sem renovação automática',
                    'Sem fidelidade',
                    'Ideal para testes ou períodos curtos'
                ],
                isPopular: false,
                badgeText: "SEM COMPROMISSO",
                buttonText: "Quero Testar"
            }
        ]
    },

    bmi: {
        enabled: true,
        backgroundImage: AssetImages.bmi.background.src,
        mobileBackgroundImage: AssetImages.bmi.mobileBackground.src, // Altere para a imagem mobile desejada
        tableTitle: {
            line1: "Tabela",
            highlight: "IMC"
        },
        formTitle: {
            line1: "Calcule Seu ",
            highlight: "IMC"
        },
        description: "Insira seus dados abaixo e veja como está seu Índice de Massa Corporal.",
        resultTitle: "RECOMENDAÇÃO:",
        resultText: "Baseado no seu IMC, recomendamos o Plano Anual com foco em Musculação 3x/semana e Funcional 2x/semana.",
        buttonText: "Agendar Avaliação Física Gratuita"
    },



    testimonials: {
        enabled: true,
        backgroundImage: AssetImages.testimonials.background.src,
        items: [
            {
                id: 1,
                text: "Comecei há 6 meses e já perdi 8kg! Os professores acompanham cada treino e ajustam conforme minha evolução. Melhor decisão que tomei!",
                name: "Josué Costa",
                role: "Analista de TI, 34 anos",
                image: AssetImages.testimonials.person1.src
            },
            {
                id: 2,
                text: "Academia completa, limpa e com equipamentos sempre funcionando. O ambiente é motivador e nunca fica lotada. Recomendo!",
                name: "Carlos Eduardo",
                role: "Marceneiro, 56 anos",
                image: AssetImages.testimonials.person2.src
            },
            {
                id: 3,
                text: "As aulas de Zumba são incríveis! Parece que nem estou malhando de tão divertido. Emagreci 8kg em 4 meses dançando!",
                name: "Juliana Mendes",
                role: "Professora, 23 anos",
                image: AssetImages.testimonials.person3.src
            }
        ]
    },

    brands: {
        enabled: false,
        items: [
            AssetImages.brands.brand1.src,
            AssetImages.brands.brand2.src,
            AssetImages.brands.brand3.src,
            AssetImages.brands.brand4.src,
            AssetImages.brands.brand5.src
        ]
    },

    footer: {
        enabled: true,
        title: "SPARTA GYM",
        description: "Academia completa especializada em musculação. Equipamentos modernos e professores certificados para você alcançar seus objetivos com segurança.",

        logo: {
            text: "SPARTA ",
            highlight: "GYM"
        },

        hours: [
            "Seg-Qui: 5h-23h",
            "Sex: 5h-22h",
            "Sab: 8h-13h e 16h-19h",
            "Dom: 9h-12h"
        ],

        socials: {
            instagram: "https://instagram.com/acadspartagym",
            facebook: "https://facebook.com/acadspartagym",
            youtube: "https://youtube.com/acadspartagym"
        },

        copyright: "Copyright © 2025 Sparta Gym. Todos os direitos reservados.",
        developerName: "TAKOA",
        developerUrl: "https://takoadigital.com.br"
    }
};
