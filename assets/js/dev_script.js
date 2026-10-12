
        (function () {
            'use strict';

            /* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
               1. FILE CONTENT
               â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */

            const CONTACT = {
                email: 'ogunladedaniel12@gmail.com',
                github: 'https://github.com/Ogunlade-Daniel',
                whatsapp: 'https://wa.me/2348166729962',
                phone: '+234 912 559 4236',
                resume: 'Daniel_Ogunlade_CV.pdf'
            };

            /* helper: wrap an array of pre-marked HTML lines into a numbered code block */
            function code(lines) {
                return '<div class="code">' + lines.map(function (line, i) {
                    const content = (line === '' || line == null) ? '&nbsp;' : line;
                    return '<div class="code-line"><span class="ln">' + (i + 1) + '</span>' +
                        '<span class="lc">' + content + '</span></div>';
                }).join('') + '</div>';
            }

            /* â”€â”€ syntax shorthand â”€â”€ */
            const kw = s => '<span class="s-kw">' + s + '</span>';
            const str = s => '<span class="s-str">' + s + '</span>';
            const num = s => '<span class="s-num">' + s + '</span>';
            const prop = s => '<span class="s-prop">' + s + '</span>';
            const com = s => '<span class="s-com">' + s + '</span>';
            const key = s => '<span class="s-key">' + s + '</span>';
            const punc = s => '<span class="s-punc">' + s + '</span>';

            /* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ README.md â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
            const README_LINES = [
                '<span class="s-head"># Daniel Ogunlade</span>',
                com('&gt; full-stack developer Â· Nigeria Â· open to work'),
                '',
                'I build thoughtful <span class="s-strong">web experiences</span> â€” responsive,',
                'user-focused applications with JavaScript, Python, Django and Node.js.',
                '',
                key('status') + '   open for full-stack roles &amp; freelance',
                key('stack') + '    HTML/CSS/JS Â· Node.js Â· Python Â· Django Â· MySQL',
                key('cert') + '     UCTA/FSD/2025/11549 â€” Fullstack Web Development',
                key('contact') + '  ' + str('ogunladedaniel12@gmail.com'),
                '',
                com('// press Ctrl/âŒ˜ + K to open the command palette'),
                com('// type `help` in the terminal below to explore')
            ];

            /* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ about.md â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
            const ABOUT_LINES = [
                '<span class="s-head">## about</span>',
                '',
                "I'm Daniel â€” a full-stack web developer based in Nigeria. My path into",
                'development started with curiosity about how websites actually work',
                'under the hood, and turned into a structured, hands-on commitment: a',
                '5-month intensive Fullstack Web Development program at UpTech Computer',
                'Training Academy, completed in June 2025.',
                '',
                'Over that program I worked across the <span class="s-strong">entire stack</span> â€” building',
                'responsive interfaces with HTML, CSS and JavaScript, then moving into',
                'server-side logic, REST APIs, and relational and document databases.',
                "I didn't just learn syntax; I learned how the pieces of a real",
                'application fit together.',
                '',
                "I'm now applying that foundation to real projects, with a focus on",
                'writing clean, readable code and understanding <span class="s-strong">why</span> something',
                "works â€” not just getting it to run. I'm actively looking for",
                'opportunities, freelance or full-time, to keep building.'
            ];

            /* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ skills.json â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
            const SKILLS_LINES = [
                punc('{'),
                '  ' + prop('"frontend"') + punc(':') + '  ' + punc('[') + str('"HTML5"') + punc(',') + ' ' + str('"CSS3"') + punc(',') + ' ' + str('"JavaScript"') + punc(',') + ' ' + str('"Bootstrap"') + punc(',') + ' ' + str('"Responsive Design"') + punc('],'),
                '  ' + prop('"backend"') + punc(':') + '   ' + punc('[') + str('"Node.js"') + punc(',') + ' ' + str('"Python"') + punc(',') + ' ' + str('"Django"') + punc(',') + ' ' + str('"REST APIs"') + punc(',') + ' ' + str('"Server-side Logic"') + punc('],'),
                '  ' + prop('"databases"') + punc(':') + ' ' + punc('[') + str('"MySQL"') + punc(',') + ' ' + str('"Data Modeling"') + punc('],'),
                '  ' + prop('"tools"') + punc(':') + '     ' + punc('[') + str('"Git &amp; GitHub"') + punc(',') + ' ' + str('"VS Code"') + punc(',') + ' ' + str('"Postman"') + punc(',') + ' ' + str('"CLI"') + punc('],'),
                '  ' + prop('"concepts"') + punc(':') + '  ' + punc('[') + str('"OOP"') + punc(',') + ' ' + str('"MVC"') + punc(',') + ' ' + str('"Version Control"') + punc(',') + ' ' + str('"Debugging"') + punc('],'),
                '  ' + prop('"learning"') + punc(':') + '  ' + punc('[') + str('"React"') + punc(',') + ' ' + str('"Express"') + punc(',') + ' ' + str('"Deployment &amp; CI/CD"') + punc(']'),
                punc('}')
            ];

            /* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ projects.ts â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
            const PROJECTS_LINES = [
                kw('type') + ' Status = ' + str('"live"') + ' ' + punc('|') + ' ' + str('"wip"') + punc(';'),
                '',
                kw('interface') + ' ' + prop('Project') + ' ' + punc('{'),
                '  ' + prop('name') + punc(':') + ' ' + kw('string') + punc(';'),
                '  ' + prop('status') + punc(':') + ' ' + prop('Status') + punc(';'),
                '  ' + prop('desc') + punc(':') + ' ' + kw('string') + punc(';'),
                '  ' + prop('stack') + punc(':') + ' ' + kw('string') + punc('[];'),
                '  ' + prop('repo') + punc('?:') + ' ' + kw('string') + punc(';'),
                punc('}'),
                '',
                kw('const') + ' ' + prop('projects') + punc(':') + ' ' + prop('Project') + punc('[] = ['),
                '  ' + punc('{'),
                '    ' + prop('name') + punc(':') + ' ' + str('"TastecraftMe"') + punc(','),
                '    ' + prop('status') + punc(':') + ' ' + str('"live"') + punc(','),
                '    ' + prop('desc') + punc(':') + ' ' + str('"Restaurant ordering platform â€” browse meals, place orders."') + punc(','),
                '    ' + prop('stack') + punc(':') + ' ' + punc('[') + str('"HTML"') + punc(',') + ' ' + str('"CSS"') + punc(',') + ' ' + str('"JavaScript"') + punc(',') + ' ' + str('"Django"') + punc(',') + ' ' + str('"MySQL"') + punc('],'),
                '    ' + prop('repo') + punc(':') + ' ' + str('"github.com/Ogunlade-Daniel/TastecraftMe"'),
                '  ' + punc('},'),
                '  ' + punc('{'),
                '    ' + prop('name') + punc(':') + ' ' + str('"Marvellan Hotel"') + punc(','),
                '    ' + prop('status') + punc(':') + ' ' + str('"live"') + punc(','),
                '    ' + prop('desc') + punc(':') + ' ' + str('"Hotel booking web app â€” explore rooms, reserve online."') + punc(','),
                '    ' + prop('stack') + punc(':') + ' ' + punc('[') + str('"HTML"') + punc(',') + ' ' + str('"CSS"') + punc(',') + ' ' + str('"JavaScript"') + punc(',') + ' ' + str('"Django"') + punc(',') + ' ' + str('"MySQL"') + punc(',') + ' ' + str('"Express"') + punc('],'),
                '    ' + prop('repo') + punc(':') + ' ' + str('"github.com/Ogunlade-Daniel/Marvellan_Hotel"'),
                '  ' + punc('},'),
                '  ' + punc('{'),
                '    ' + prop('name') + punc(':') + ' ' + str('"Personal Portfolio"') + punc(','),
                '    ' + prop('status') + punc(':') + ' ' + str('"live"') + punc(','),
                '    ' + prop('desc') + punc(':') + ' ' + str('"Responsive portfolio site showcasing projects, profile, and dashboard."') + punc(','),
                '    ' + prop('stack') + punc(':') + ' ' + punc('[') + str('"HTML"') + punc(',') + ' ' + str('"CSS"') + punc(',') + ' ' + str('"JavaScript"') + punc(',') + ' ' + str('"Bootstrap"') + punc(',') + ' ' + str('"GitHub Pages"') + punc('],'),
                '    ' + prop('repo') + punc(':') + ' ' + str('"github.com/Ogunlade-Daniel/Personal-Portfolio"'),
                '  ' + punc('},'),
                '  ' + punc('{'),
                '    ' + prop('name') + punc(':') + ' ' + str('"KnotWork"') + punc(','),
                '    ' + prop('status') + punc(':') + ' ' + str('"wip"') + punc(','),
                '    ' + prop('desc') + punc(':') + ' ' + str('"Educational platform connecting learners with knowledge."') + punc(','),
                '    ' + prop('stack') + punc(':') + ' ' + punc('[') + str('"HTML"') + punc(',') + ' ' + str('"CSS"') + punc(',') + ' ' + str('"Bootstrap"') + punc(',') + ' ' + str('"JavaScript"') + punc(',') + ' ' + str('"Python"') + punc(',') + ' ' + str('"Django"') + punc(',') + ' ' + str('"MySQL"') + punc(']'),
                '  ' + punc('}'),
                punc('];')
            ];

            /* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ experience.log â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
            const EXPERIENCE_LINES = [
                com('# training + build log'),
                '',
                '<span class="s-com">2025-01-20</span>  ' + key('INFO') + '   enrolled â€” Fullstack Web Development @ UpTech (UCTA)',
                '<span class="s-com">2025-03-01</span>  ' + key('INFO') + '   front-end module complete â€” HTML Â· CSS Â· JavaScript',
                '<span class="s-com">2025-05-01</span>  ' + key('INFO') + '   back-end + database module complete â€” REST Â· MySQL',
                '<span class="s-com">2025-06-20</span>  ' + '<span class="s-str">DONE</span>' + '   all mandatory modules satisfied âœ“',
                '<span class="s-com">2025-06-20</span>  ' + '<span class="s-str">DONE</span>' + '   certificate issued â€” UCTA/FSD/2025/11549',
                '<span class="s-com">now       </span>  ' + key('INFO') + '   building real projects Â· open to opportunities',
                '',
                com('// 1+ year experience Â· 5+ projects delivered Â· 3+ happy clients')
            ];

            /* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ credentials.json â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
            const CREDENTIALS_LINES = [
                punc('['),
                '  ' + punc('{'),
                '    ' + prop('"title"') + punc(':') + '  ' + str('"Fullstack Web Development"') + punc(','),
                '    ' + prop('"issuer"') + punc(':') + ' ' + str('"UpTech Academy"') + punc(','),
                '    ' + prop('"year"') + punc(':') + '   ' + num('2025') + punc(','),
                '    ' + prop('"id"') + punc(':') + '     ' + str('"UCTA/FSD/2025/11549"'),
                '  ' + punc('},'),
                '  ' + punc('{'),
                '    ' + prop('"title"') + punc(':') + '  ' + str('"JavaScript Certification"') + punc(','),
                '    ' + prop('"issuer"') + punc(':') + ' ' + str('"UpTech Academy"') + punc(','),
                '    ' + prop('"year"') + punc(':') + '   ' + num('2025'),
                '  ' + punc('},'),
                '  ' + punc('{'),
                '    ' + prop('"title"') + punc(':') + '  ' + str('"Top Performer"') + punc(','),
                '    ' + prop('"issuer"') + punc(':') + ' ' + str('"UpTech Academy"') + punc(','),
                '    ' + prop('"year"') + punc(':') + '   ' + num('2025'),
                '  ' + punc('},'),
                '  ' + punc('{'),
                '    ' + prop('"title"') + punc(':') + '  ' + str('"Database Design &amp; SQL"') + punc(','),
                '    ' + prop('"issuer"') + punc(':') + ' ' + str('"UpTech Academy"') + punc(','),
                '    ' + prop('"year"') + punc(':') + '   ' + num('2025'),
                '  ' + punc('}'),
                punc(']')
            ];

            /* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ contact.sh â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
            const CONTACT_LINES = [
                '<span class="s-com">#!/usr/bin/env bash</span>',
                com('# â”€â”€ reach daniel â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€'),
                '',
                prop('EMAIL') + punc('=') + str('"ogunladedaniel12@gmail.com"'),
                prop('GITHUB') + punc('=') + str('"https://github.com/Ogunlade-Daniel"'),
                prop('WHATSAPP') + punc('=') + str('"https://wa.me/2348166729962"'),
                prop('PHONE') + punc('=') + str('"+234 912 559 4236"'),
                prop('RESUME') + punc('=') + str('"Daniel_Ogunlade_CV.pdf"'),
                '',
                key('echo') + ' ' + str('"Open to full-time roles, internships and freelance work."')
            ];

            /* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
               2. FILE REGISTRY
               â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */

            const FILES = {
                'README.md': {
                    icon: 'bi-file-earmark-text',
                    lang: 'markdown',
                    group: 'Portfolio',
                    color: 'var(--accent)',
                    render: function () { return code(README_LINES); }
                },
                'about.md': {
                    icon: 'bi-file-earmark-text',
                    lang: 'markdown',
                    group: 'Portfolio',
                    color: 'var(--accent)',
                    render: function () { return code(ABOUT_LINES); }
                },
                'skills.json': {
                    icon: 'bi-filetype-json',
                    lang: 'json',
                    group: 'Portfolio',
                    color: 'var(--yellow)',
                    render: function () {
                        return code(SKILLS_LINES) +
                            '<div class="block-title">Rendered</div>' +
                            '<div class="card-grid">' +
                            skillCard('Front-End', 'bi-layout-text-window', ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Responsive Design']) +
                            skillCard('Back-End', 'bi-server', ['Node.js', 'Python', 'Django', 'REST APIs', 'Server-side Logic']) +
                            skillCard('Databases', 'bi-hdd-stack', ['MySQL', 'Data Modeling']) +
                            skillCard('Tools &amp; Workflow', 'bi-tools', ['Git &amp; GitHub', 'VS Code', 'Postman', 'CLI']) +
                            skillCard('Core Concepts', 'bi-diagram-3', ['OOP', 'MVC', 'Version Control', 'Debugging']) +
                            skillCard('Currently Learning', 'bi-arrow-repeat', ['React', 'Express', 'Deployment &amp; CI/CD']) +
                            '</div>';
                    }
                },
                'projects.ts': {
                    icon: 'bi-filetype-js',
                    lang: 'typescript',
                    group: 'Portfolio',
                    color: 'var(--blue)',
                    render: function () {
                        return code(PROJECTS_LINES) +
                            '<div class="block-title">Live preview</div>' +
                            '<div class="card-grid">' +
                            projectCard({
                                name: 'TastecraftMe',
                                status: 'live',
                                desc: 'A restaurant ordering platform designed to make browsing meals and placing customer orders straightforward.',
                                stack: ['HTML', 'CSS', 'JavaScript', 'Django', 'MySQL'],
                                repo: 'https://github.com/Ogunlade-Daniel/TastecraftMe'
                            }) +
                            projectCard({
                                name: 'Marvellan Hotel',
                                status: 'live',
                                desc: 'A hotel booking web app built to help guests explore accommodation and make reservations online.',
                                stack: ['HTML', 'CSS', 'JavaScript', 'Django', 'MySQL', 'Express'],
                                repo: 'https://github.com/Ogunlade-Daniel/Marvellan_Hotel'
                            }) +
                            projectCard({
                                name: 'Personal Portfolio',
                                status: 'live',
                                desc: 'A responsive portfolio website showcasing profile, selected work, and the interactive dev dashboard.',
                                stack: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'GitHub Pages'],
                                repo: 'https://github.com/Ogunlade-Daniel/Personal-Portfolio'
                            }) +
                            projectCard({
                                name: 'KnotWork',
                                status: 'wip',
                                desc: 'An educational web project exploring the idea of connecting learners with useful knowledge.',
                                stack: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'Python', 'Django', 'MySQL'],
                                repo: null
                            }) +
                            '</div>' +
                            '<div class="action-row">' +
                            '<a class="btn primary" href="https://github.com/Ogunlade-Daniel" target="_blank" rel="noopener noreferrer">' +
                            '<i class="bi bi-github" aria-hidden="true"></i> All repositories</a>' +
                            '</div>';
                    }
                },
                'experience.log': {
                    icon: 'bi-terminal',
                    lang: 'log',
                    group: 'Portfolio',
                    color: 'var(--green)',
                    render: function () { return code(EXPERIENCE_LINES); }
                },
                'credentials.json': {
                    icon: 'bi-patch-check',
                    lang: 'json',
                    group: 'Portfolio',
                    color: 'var(--teal)',
                    render: function () { return code(CREDENTIALS_LINES); }
                },
                'contact.sh': {
                    icon: 'bi-terminal',
                    lang: 'shell',
                    group: 'Portfolio',
                    color: 'var(--purple)',
                    render: function () {
                        return code(CONTACT_LINES) +
                            '<div class="block-title">Run it</div>' +
                            '<div class="action-row">' +
                            '<a class="btn primary" href="mailto:' + CONTACT.email + '"><i class="bi bi-envelope" aria-hidden="true"></i> Email me</a>' +
                            '<a class="btn" href="' + CONTACT.github + '" target="_blank" rel="noopener noreferrer"><i class="bi bi-github" aria-hidden="true"></i> GitHub</a>' +
                            '<a class="btn" href="' + CONTACT.whatsapp + '" target="_blank" rel="noopener noreferrer"><i class="bi bi-whatsapp" aria-hidden="true"></i> WhatsApp</a>' +
                            '<a class="btn" href="tel:+2349125594236"><i class="bi bi-telephone-fill" aria-hidden="true"></i> Call</a>' +
                            '<a class="btn" href="' + CONTACT.resume + '" download><i class="bi bi-file-earmark-arrow-down" aria-hidden="true"></i> RÃ©sumÃ©</a>' +
                            '</div>';
                    }
                }
            };

            const FILE_ORDER = ['README.md', 'about.md', 'skills.json', 'projects.ts', 'experience.log', 'credentials.json', 'contact.sh'];

            /* â”€â”€ card builders â”€â”€ */
            function skillCard(title, icon, tags) {
                return '<article class="pcard">' +
                    '<div class="pcard-head"><i class="bi ' + icon + '" aria-hidden="true"></i><h3>' + title + '</h3></div>' +
                    '<ul class="stack">' + tags.map(t => '<li>' + t + '</li>').join('') + '</ul>' +
                    '</article>';
            }

            function projectCard(p) {
                const badge = p.status === 'live'
                    ? '<span class="pill live">live</span>'
                    : '<span class="pill wip">in progress</span>';

                const link = p.repo
                    ? '<a class="pcard-link" href="' + p.repo + '" target="_blank" rel="noopener noreferrer">View source <i class="bi bi-arrow-up-right" aria-hidden="true"></i></a>'
                    : '<span class="pcard-link" style="color:var(--dim);cursor:default;">Private / not published</span>';

                return '<article class="pcard">' +
                    '<div class="pcard-head"><i class="bi bi-folder-fill" aria-hidden="true"></i><h3>' + p.name + '</h3>' + badge + '</div>' +
                    '<p>' + p.desc + '</p>' +
                    '<ul class="stack">' + p.stack.map(s => '<li>' + s + '</li>').join('') + '</ul>' +
                    link +
                    '</article>';
            }

            /* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
               3. ELEMENTS
               â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */

            const $ = id => document.getElementById(id);

            const explorerList = $('explorerList');
            const explorer = $('explorer');
            const explorerBack = $('explorerBackdrop');
            const explorerBtn = $('explorerToggle');
            const tabsEl = $('tabs');
            const crumbsEl = $('crumbs');
            const editorInner = $('editorInner');
            const editorEl = $('editor');
            const terminalEl = $('terminal');
            const termBody = $('termBody');
            const termInput = $('termInput');
            const termForm = $('termForm');
            const termToggle = $('termToggle');
            const termToggleIcon = $('termToggleIcon');
            const paletteBack = $('paletteBackdrop');
            const paletteInput = $('paletteInput');
            const paletteList = $('paletteList');
            const themeBtn = $('themeBtn');
            const themeIcon = $('themeIcon');
            const themeDropdown = $('themeDropdown');
            const themeOptions = document.querySelectorAll('.theme-option');
            const sbFile = $('sbFile');
            const inspName = $('inspName');
            const inspLang = $('inspLang');
            const inspLines = $('inspLines');

            /* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
               4. STATE
               â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */

            let openTabs = ['README.md'];
            let activeFile = 'README.md';
            let cmdHistory = [];
            let histIndex = -1;

            /* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
               5. EXPLORER
               â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */

            function renderExplorer() {
                let html = '<div class="ex-group">Portfolio</div>';

                FILE_ORDER.forEach(function (name) {
                    const f = FILES[name];
                    html += '<button class="ex-item' + (name === activeFile ? ' active' : '') + '" data-file="' + name + '">' +
                        '<i class="bi ' + f.icon + '" style="color:' + f.color + '" aria-hidden="true"></i>' +
                        '<span>' + name + '</span>' +
                        '</button>';
                });

                html += '<div class="ex-group">External</div>';
                html += '<a class="ex-item" href="' + CONTACT.github + '" target="_blank" rel="noopener noreferrer">' +
                    '<i class="bi bi-github" style="color:var(--muted)" aria-hidden="true"></i><span>github.com</span>' +
                    '<span class="ext">â†—</span></a>';
                html += '<a class="ex-item" href="mailto:' + CONTACT.email + '">' +
                    '<i class="bi bi-envelope" style="color:var(--accent)" aria-hidden="true"></i><span>email</span>' +
                    '<span class="ext">â†—</span></a>';
                html += '<a class="ex-item" href="' + CONTACT.resume + '" download>' +
                    '<i class="bi bi-file-earmark-arrow-down" style="color:var(--red)" aria-hidden="true"></i><span>CV.pdf</span>' +
                    '<span class="ext">â†“</span></a>';
                html += '<a class="ex-item" href="index.html">' +
                    '<i class="bi bi-box-arrow-up-right" style="color:var(--teal)" aria-hidden="true"></i><span>Main portfolio</span>' +
                    '<span class="ext">â†—</span></a>';

                explorerList.innerHTML = html;

                explorerList.querySelectorAll('[data-file]').forEach(function (btn) {
                    btn.addEventListener('click', function () {
                        openFile(btn.dataset.file);
                        closeExplorer();
                    });
                });
            }

            /* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
               6. TABS
               â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */

            function renderTabs() {
                tabsEl.innerHTML = openTabs.map(function (name) {
                    const f = FILES[name];
                    return '<button class="tab' + (name === activeFile ? ' active' : '') + '" data-tab="' + name + '" role="tab" aria-selected="' + (name === activeFile) + '">' +
                        '<i class="bi ' + f.icon + '" aria-hidden="true"></i>' +
                        '<span>' + name + '</span>' +
                        '<span class="close" data-close="' + name + '" role="button" aria-label="Close ' + name + '"><i class="bi bi-x" aria-hidden="true"></i></span>' +
                        '</button>';
                }).join('');

                tabsEl.querySelectorAll('[data-tab]').forEach(function (tab) {
                    tab.addEventListener('click', function (e) {
                        if (e.target.closest('[data-close]')) return;
                        openFile(tab.dataset.tab);
                    });
                });

                tabsEl.querySelectorAll('[data-close]').forEach(function (btn) {
                    btn.addEventListener('click', function (e) {
                        e.stopPropagation();
                        closeTab(btn.dataset.close);
                    });
                });
            }

            function closeTab(name) {
                const idx = openTabs.indexOf(name);
                if (idx === -1) return;
                openTabs.splice(idx, 1);
                if (openTabs.length === 0) openTabs = ['README.md'];
                if (activeFile === name) activeFile = openTabs[Math.min(idx, openTabs.length - 1)];
                renderTabs();
                renderEditor();
            }

            /* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
               7. EDITOR
               â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */

            function openFile(name, opts) {
                if (!FILES[name]) return;

                if (openTabs.indexOf(name) === -1) openTabs.push(name);
                activeFile = name;

                renderTabs();
                renderEditor();
                renderExplorer();

                if (!opts || !opts.silent) {
                    editorEl.scrollTop = 0;
                }
            }

            function renderEditor() {
                const f = FILES[activeFile];
                if (!f) return;

                editorInner.innerHTML = f.render();

                /* crumbs */
                crumbsEl.innerHTML =
                    '<span>portfolio</span><span>â€º</span><span class="cur">' + activeFile + '</span>';

                /* status + inspector */
                const lineCount = editorInner.querySelectorAll('.code-line').length || 'â€”';
                if (sbFile) sbFile.textContent = activeFile;
                if (inspName) inspName.textContent = activeFile;
                if (inspLang) inspLang.textContent = f.lang;
                if (inspLines) inspLines.textContent = lineCount;
            }

            /* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
               8. THEME
               â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */

            const THEME_KEY = 'portfolio-dev-theme';
            const THEMES = ['light', 'dark', 'nord', 'dracula', 'monokai', 'solarized-dark', 'solarized-light', 'system'];
            const THEME_LABELS = {
                light: 'Light',
                dark: 'Dark',
                nord: 'Nord',
                dracula: 'Dracula',
                monokai: 'Monokai',
                'solarized-dark': 'Solarized Dark',
                'solarized-light': 'Solarized Light',
                system: 'System'
            };

            function resolveTheme(preference) {
                if (preference === 'system') {
                    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                }
                return preference;
            }

            function applyTheme(preference) {
                const theme = resolveTheme(preference);
                document.documentElement.setAttribute('data-theme', theme);
                document.documentElement.setAttribute('data-theme-pref', preference);
                localStorage.setItem(THEME_KEY, preference);

                if (themeIcon) {
                    themeIcon.className = 'bi bi-palette2';
                }

                const themeLabel = $('themeLabel');
                if (themeLabel) themeLabel.textContent = THEME_LABELS[preference];
                themeBtn.setAttribute('aria-label', 'Color theme: ' + THEME_LABELS[preference]);

                const meta = document.querySelector('meta[name="theme-color"]');
                if (meta) meta.content = theme === 'dark' ? '#0B0D12' : '#F4F3EF';

                themeOptions.forEach(function (option) {
                    const selected = option.dataset.theme === preference;
                    option.classList.toggle('current', selected);
                    option.setAttribute('aria-pressed', String(selected));
                });
            }

            function toggleTheme() {
                const current = localStorage.getItem(THEME_KEY);
                const currentIndex = THEMES.indexOf(current);
                applyTheme(THEMES[(currentIndex + 1) % THEMES.length]);
            }

            const storedTheme = localStorage.getItem(THEME_KEY);
            applyTheme(THEMES.includes(storedTheme) ? storedTheme : 'dark');

            function closeThemeDropdown() {
                themeDropdown.classList.remove('open');
                themeDropdown.setAttribute('aria-hidden', 'true');
                themeBtn.setAttribute('aria-expanded', 'false');
            }

            themeBtn.addEventListener('click', function (event) {
                event.stopPropagation();
                const open = !themeDropdown.classList.contains('open');
                themeDropdown.classList.toggle('open', open);
                themeDropdown.setAttribute('aria-hidden', String(!open));
                themeBtn.setAttribute('aria-expanded', String(open));
            });

            themeOptions.forEach(function (option) {
                option.addEventListener('click', function () {
                    applyTheme(option.dataset.theme);
                    closeThemeDropdown();
                    themeBtn.focus();
                });
            });

            document.addEventListener('click', function (event) {
                if (!themeDropdown.contains(event.target) && !themeBtn.contains(event.target)) {
                    closeThemeDropdown();
                }
            });

            document.addEventListener('keydown', function (event) {
                if (event.key === 'Escape' && themeDropdown.classList.contains('open')) {
                    closeThemeDropdown();
                    themeBtn.focus();
                }
            });

            window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function () {
                if (localStorage.getItem(THEME_KEY) === 'system') applyTheme('system');
            });

            /* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
               9. TERMINAL
               â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */

            function print(html, cls) {
                const div = document.createElement('div');
                div.className = 'term-line' + (cls ? ' ' + cls : '');
                div.innerHTML = html;
                termBody.appendChild(div);
                termBody.scrollTop = termBody.scrollHeight;
                return div;
            }

            function printEcho(cmd) {
                print('<span class="term-echo"><span class="p1">daniel@portfolio</span><span class="p2">:~$</span> ' + escapeHtml(cmd) + '</span>');
            }

            function escapeHtml(s) {
                return String(s).replace(/[&<>"']/g, function (c) {
                    return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
                });
            }

            function banner() {
                print('<span class="accent">â–¸ daniel@portfolio</span> â€” full-stack developer');
                print('<span class="dim">â–¸ stack:</span> JavaScript Â· Node.js Â· Python Â· Django Â· MySQL');
                print('<span class="dim">â–¸ type</span> <span class="accent">help</span> <span class="dim">to see available commands</span>');
                print('');
            }

            const COMMANDS = {
                help: function () {
                    const rows = [
                        ['help', 'show this list'],
                        ['whoami', 'who is Daniel'],
                        ['about', 'open about.md'],
                        ['skills', 'list the stack'],
                        ['projects', 'list projects'],
                        ['stack', 'one-line stack summary'],
                        ['certs', 'certificates & awards'],
                        ['timeline', 'training timeline'],
                        ['stats', 'quick numbers'],
                        ['contact', 'how to reach me'],
                        ['email', 'open a mail draft'],
                        ['github', 'open GitHub profile'],
                        ['resume', 'download the CV'],
                        ['theme', 'toggle dark / light'],
                        ['open <file>', 'open a file in the editor'],
                        ['ls', 'list files'],
                        ['clear', 'clear the terminal'],
                        ['main', 'back to the main portfolio'],
                        ['neofetch', 'system info'],
                        ['exit', 'leave dev mode']
                    ];
                    print('<span class="accent">Available commands</span>');
                    rows.forEach(function (r) {
                        print('  <span class="ink">' + r[0].padEnd(14, ' ') + '</span><span class="dim">' + r[1] + '</span>');
                    });
                    print('');
                    print('<span class="dim">tip: click any chip below, or press â†‘ to reuse the last command.</span>');
                },

                whoami: function () {
                    print('<span class="accent">Daniel Ogunlade</span>');
                    print('<span class="dim">role    </span> Full-stack Web Developer');
                    print('<span class="dim">location</span> Nigeria');
                    print('<span class="dim">focus   </span> JavaScript Â· Python Â· Django Â· Node.js');
                    print('<span class="dim">status  </span> <span class="ok">open to full-time roles &amp; freelance</span>');
                    print('<span class="dim">cert    </span> UCTA/FSD/2025/11549');
                },

                about: function () { openFile('about.md'); print('<span class="ok">opened</span> about.md', 'dim'); },

                skills: function () {
                    const groups = [
                        ['frontend', 'HTML5, CSS3, JavaScript, Bootstrap, Responsive Design'],
                        ['backend', 'Node.js, Python, Django, REST APIs, Server-side Logic'],
                        ['databases', 'MySQL, Data Modeling'],
                        ['tools', 'Git & GitHub, VS Code, Postman, CLI'],
                        ['concepts', 'OOP, MVC, Version Control, Debugging'],
                        ['learning', 'React, Express, Deployment & CI/CD']
                    ];
                    print('<span class="accent">stack</span>');
                    groups.forEach(function (g) {
                        print('  <span class="ink">' + g[0].padEnd(11, ' ') + '</span><span class="dim">' + g[1] + '</span>');
                    });
                    openFile('skills.json', { silent: true });
                },

                projects: function () {
                    print('<span class="accent">projects</span>');
                    print('  <span class="ok">â— live</span>  TastecraftMe      <span class="dim">restaurant ordering Â· Django + MySQL</span>');
                    print('  <span class="ok">â— live</span>  Marvellan Hotel   <span class="dim">hotel booking Â· Django + Express</span>');
                    print('  <span class="warn">â— wip </span>  KnotWork          <span class="dim">education platform Â· in progress</span>');
                    print('');
                    print('<span class="dim">run</span> <span class="accent">open projects.ts</span> <span class="dim">for the full view.</span>');
                    openFile('projects.ts', { silent: true });
                },

                stack: function () {
                    print('JavaScript Â· Node.js Â· Python Â· Django Â· MySQL Â· HTML/CSS Â· Git');
                },

                certs: function () {
                    print('<span class="accent">certificates &amp; awards</span>');
                    print('  âœ“ Fullstack Web Development â€” UpTech Academy Â· 2025');
                    print('  âœ“ JavaScript Certification â€” UpTech Academy Â· 2025');
                    print('  âœ“ Top Performer â€” UpTech Academy Â· 2025');
                    print('  âœ“ Database Design &amp; SQL â€” UpTech Academy Â· 2025');
                    openFile('credentials.json', { silent: true });
                },

                timeline: function () {
                    print('<span class="accent">timeline</span>');
                    print('  <span class="dim">2025-01</span> started Fullstack Web Development @ UCTA');
                    print('  <span class="dim">2025-03</span> front-end module complete');
                    print('  <span class="dim">2025-05</span> back-end + database module complete');
                    print('  <span class="dim">2025-06</span> <span class="ok">program completed â€” UCTA/FSD/2025/11549</span>');
                    print('  <span class="dim">now    </span> building real projects, open to work');
                    openFile('experience.log', { silent: true });
                },

                stats: function () {
                    print('<span class="accent">at a glance</span>');
                    print('  <span class="ink">1+</span> <span class="dim">year experience</span>');
                    print('  <span class="ink">5+</span> <span class="dim">projects delivered</span>');
                    print('  <span class="ink">3+</span> <span class="dim">happy clients</span>');
                },

                contact: function () {
                    print('<span class="accent">contact</span>');
                    print('  <span class="dim">email   </span> <a href="mailto:' + CONTACT.email + '">' + CONTACT.email + '</a>');
                    print('  <span class="dim">github  </span> <a href="' + CONTACT.github + '" target="_blank" rel="noopener noreferrer">github.com/Ogunlade-Daniel</a>');
                    print('  <span class="dim">whatsapp</span> <a href="' + CONTACT.whatsapp + '" target="_blank" rel="noopener noreferrer">' + CONTACT.whatsapp + '</a>');
                    print('  <span class="dim">phone   </span> ' + CONTACT.phone);
                    openFile('contact.sh', { silent: true });
                },

                email: function () {
                    print('<span class="ok">opening mail clientâ€¦</span>');
                    window.location.href = 'mailto:' + CONTACT.email;
                },

                github: function () {
                    print('<span class="ok">opening GitHubâ€¦</span>');
                    window.open(CONTACT.github, '_blank', 'noopener');
                },

                resume: function () {
                    print('<span class="ok">downloading Daniel_Ogunlade_CV.pdfâ€¦</span>');
                    const a = document.createElement('a');
                    a.href = CONTACT.resume;
                    a.download = '';
                    document.body.appendChild(a);
                    a.click();
                    a.remove();
                },

                theme: function () {
                    toggleTheme();
                    const t = document.documentElement.getAttribute('data-theme');
                    print('<span class="ok">theme â†’ ' + t + '</span>');
                },

                ls: function () {
                    print('<span class="dim">' + FILE_ORDER.join('   ') + '</span>');
                },

                open: function (args) {
                    const name = args.join(' ');
                    if (!name) { print('<span class="err">usage: open &lt;file&gt;</span>'); return; }
                    const match = FILE_ORDER.find(function (f) {
                        return f.toLowerCase() === name.toLowerCase();
                    });
                    if (match) {
                        openFile(match);
                        print('<span class="ok">opened</span> ' + match);
                    } else {
                        print('<span class="err">file not found:</span> ' + escapeHtml(name) + ' <span class="dim">â€” try `ls`</span>');
                    }
                },

                cat: function (args) { COMMANDS.open(args); },

                clear: function () {
                    termBody.innerHTML = '';
                },

                main: function () {
                    print('<span class="ok">leaving dev modeâ€¦</span>');
                    setTimeout(function () { window.location.href = 'index.html'; }, 320);
                },

                exit: function () { COMMANDS.main(); },

                neofetch: function () {
                    print('<span class="accent">daniel@portfolio</span>');
                    print('<span class="dim">-----------------</span>');
                    print('<span class="dim">OS      </span> Portfolio Dev Mode');
                    print('<span class="dim">Host    </span> Nigeria');
                    print('<span class="dim">Kernel  </span> Fullstack Web Development');
                    print('<span class="dim">Shell   </span> bash 5.2');
                    print('<span class="dim">Editor  </span> VS Code');
                    print('<span class="dim">Stack   </span> JavaScript Â· Node.js Â· Python Â· Django Â· MySQL');
                    print('<span class="dim">Uptime  </span> 1+ year');
                    print('<span class="dim">Status  </span> <span class="ok">open to opportunities</span>');
                },

                sudo: function () {
                    print('<span class="err">daniel is not in the sudoers file. This incident has been reported.</span>');
                    print('<span class="dim">(â€¦just kidding. But nice try.)</span>');
                }
            };

            function runCommand(raw) {
                const input = raw.trim();
                if (!input) return;

                printEcho(input);

                const parts = input.split(/\s+/);
                const cmd = parts[0].toLowerCase();
                const args = parts.slice(1);

                if (COMMANDS[cmd]) {
                    COMMANDS[cmd](args);
                } else {
                    print('<span class="err">command not found:</span> ' + escapeHtml(cmd) +
                        ' <span class="dim">â€” type `help` for the list</span>');
                }
                print('');
            }

            /* boot */
            banner();

            termForm.addEventListener('submit', function (e) {
                e.preventDefault();
                const value = termInput.value;
                termInput.value = '';
                if (value.trim()) {
                    cmdHistory.push(value.trim());
                    histIndex = cmdHistory.length;
                }
                runCommand(value);
            });

            termInput.addEventListener('keydown', function (e) {
                if (e.key === 'ArrowUp') {
                    e.preventDefault();
                    if (histIndex > 0) {
                        histIndex--;
                        termInput.value = cmdHistory[histIndex] || '';
                    }
                } else if (e.key === 'ArrowDown') {
                    e.preventDefault();
                    if (histIndex < cmdHistory.length - 1) {
                        histIndex++;
                        termInput.value = cmdHistory[histIndex] || '';
                    } else {
                        histIndex = cmdHistory.length;
                        termInput.value = '';
                    }
                } else if (e.key === 'l' && (e.ctrlKey || e.metaKey)) {
                    e.preventDefault();
                    COMMANDS.clear();
                }
            });

            termBody.addEventListener('click', function () {
                termInput.focus();
            });

            document.querySelectorAll('.chip').forEach(function (chip) {
                chip.addEventListener('click', function () {
                    const cmd = chip.dataset.cmd;
                    printEcho(cmd);
                    if (COMMANDS[cmd]) COMMANDS[cmd]([]);
                    print('');
                    termInput.focus();
                });
            });

            $('termClear').addEventListener('click', function () {
                COMMANDS.clear();
                termInput.focus();
            });

            function toggleTerminal(force) {
                const collapsed = typeof force === 'boolean' ? force : !terminalEl.classList.contains('collapsed');
                terminalEl.classList.toggle('collapsed', collapsed);
                termToggleIcon.className = collapsed ? 'bi bi-chevron-up' : 'bi bi-chevron-down';
                termToggle.setAttribute('aria-label', collapsed ? 'Expand terminal' : 'Collapse terminal');
                if (!collapsed) termInput.focus();
            }

            termToggle.addEventListener('click', function () { toggleTerminal(); });

            /* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
               10. EXPLORER DRAWER (mobile)
               â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */

            function openExplorer() {
                explorer.classList.add('open');
                explorerBack.classList.add('open');
                explorerBtn.setAttribute('aria-expanded', 'true');
            }

            function closeExplorer() {
                explorer.classList.remove('open');
                explorerBack.classList.remove('open');
                explorerBtn.setAttribute('aria-expanded', 'false');
            }

            explorerBtn.addEventListener('click', function () {
                explorer.classList.contains('open') ? closeExplorer() : openExplorer();
            });
            explorerBack.addEventListener('click', closeExplorer);

            /* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
               11. COMMAND PALETTE
               â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */

            const ACTIONS = [];

            FILE_ORDER.forEach(function (name) {
                ACTIONS.push({
                    label: 'Open ' + name,
                    hint: 'file',
                    icon: FILES[name].icon,
                    run: function () { openFile(name); }
                });
            });

            ACTIONS.push(
                { label: 'Toggle theme', hint: 'view', icon: 'bi-circle-half', run: toggleTheme },
                { label: 'Toggle terminal', hint: 'view', icon: 'bi-terminal', run: function () { toggleTerminal(); } },
                { label: 'Focus terminal', hint: 'view', icon: 'bi-chevron-right', run: function () { toggleTerminal(false); termInput.focus(); } },
                { label: 'Clear terminal', hint: 'action', icon: 'bi-trash3', run: function () { COMMANDS.clear(); } },
                { label: 'Download rÃ©sumÃ© (PDF)', hint: 'action', icon: 'bi-file-earmark-arrow-down', run: COMMANDS.resume },
                { label: 'Email Daniel', hint: 'contact', icon: 'bi-envelope', run: COMMANDS.email },
                { label: 'Open GitHub profile', hint: 'link', icon: 'bi-github', run: COMMANDS.github },
                { label: 'Open WhatsApp', hint: 'link', icon: 'bi-whatsapp', run: function () { window.open(CONTACT.whatsapp, '_blank', 'noopener'); } },
                { label: 'Run neofetch', hint: 'terminal', icon: 'bi-cpu', run: function () { toggleTerminal(false); printEcho('neofetch'); COMMANDS.neofetch(); print(''); } },
                { label: 'Switch to main portfolio', hint: 'nav', icon: 'bi-box-arrow-up-right', run: function () { window.location.href = 'index.html'; } }
            );

            let paletteItems = [];
            let paletteIndex = 0;

            function renderPalette(query) {
                const q = (query || '').toLowerCase().trim();
                paletteItems = ACTIONS.filter(function (a) {
                    return !q || a.label.toLowerCase().indexOf(q) !== -1 || a.hint.indexOf(q) !== -1;
                });

                if (paletteIndex >= paletteItems.length) paletteIndex = 0;

                if (!paletteItems.length) {
                    paletteList.innerHTML = '<li class="palette-empty">No matching commands.</li>';
                    return;
                }

                paletteList.innerHTML = paletteItems.map(function (a, i) {
                    return '<li class="palette-item' + (i === paletteIndex ? ' sel' : '') + '" data-index="' + i + '" role="option" aria-selected="' + (i === paletteIndex) + '">' +
                        '<i class="bi ' + a.icon + '" aria-hidden="true"></i>' +
                        '<span>' + a.label + '</span>' +
                        '<span class="hint">' + a.hint + '</span>' +
                        '</li>';
                }).join('');

                paletteList.querySelectorAll('.palette-item').forEach(function (el) {
                    el.addEventListener('mouseenter', function () {
                        paletteIndex = Number(el.dataset.index);
                        paletteList.querySelectorAll('.palette-item').forEach(function (n, i) {
                            n.classList.toggle('sel', i === paletteIndex);
                        });
                    });
                    el.addEventListener('click', function () {
                        runPaletteItem(Number(el.dataset.index));
                    });
                });
            }

            function runPaletteItem(i) {
                const action = paletteItems[i];
                if (!action) return;
                closePalette();
                action.run();
            }

            function openPalette() {
                paletteBack.classList.add('open');
                paletteBack.setAttribute('aria-hidden', 'false');
                paletteInput.value = '';
                paletteIndex = 0;
                renderPalette('');
                setTimeout(function () { paletteInput.focus(); }, 30);
            }

            function closePalette() {
                paletteBack.classList.remove('open');
                paletteBack.setAttribute('aria-hidden', 'true');
            }

            $('paletteBtn').addEventListener('click', openPalette);

            paletteInput.addEventListener('input', function () {
                paletteIndex = 0;
                renderPalette(paletteInput.value);
            });

            paletteInput.addEventListener('keydown', function (e) {
                if (e.key === 'ArrowDown') {
                    e.preventDefault();
                    paletteIndex = Math.min(paletteIndex + 1, paletteItems.length - 1);
                    renderPalette(paletteInput.value);
                } else if (e.key === 'ArrowUp') {
                    e.preventDefault();
                    paletteIndex = Math.max(paletteIndex - 1, 0);
                    renderPalette(paletteInput.value);
                } else if (e.key === 'Enter') {
                    e.preventDefault();
                    runPaletteItem(paletteIndex);
                }
            });

            paletteBack.addEventListener('click', function (e) {
                if (e.target === paletteBack) closePalette();
            });

            /* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
               12. ACTIVITY BAR + GLOBAL SHORTCUTS
               â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */

            $('abSearch').addEventListener('click', openPalette);
            $('abTerminal').addEventListener('click', function () { toggleTerminal(); });
            $('abGithub').addEventListener('click', function () { window.open(CONTACT.github, '_blank', 'noopener'); });
            $('abHome').addEventListener('click', function () { window.location.href = 'index.html'; });

            document.addEventListener('keydown', function (e) {
                /* command palette */
                if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
                    e.preventDefault();
                    paletteBack.classList.contains('open') ? closePalette() : openPalette();
                    return;
                }

                /* toggle terminal */
                if ((e.ctrlKey || e.metaKey) && e.key === '`') {
                    e.preventDefault();
                    toggleTerminal();
                    return;
                }

                /* escape */
                if (e.key === 'Escape') {
                    if (paletteBack.classList.contains('open')) { closePalette(); return; }
                    if (explorer.classList.contains('open')) { closeExplorer(); return; }
                }

                /* number keys 1-7 open files (only when not typing) */
                const tag = (document.activeElement && document.activeElement.tagName) || '';
                const typing = tag === 'INPUT' || tag === 'TEXTAREA';
                if (!typing && !e.ctrlKey && !e.metaKey && !e.altKey) {
                    const n = parseInt(e.key, 10);
                    if (n >= 1 && n <= FILE_ORDER.length) {
                        openFile(FILE_ORDER[n - 1]);
                    }
                }
            });

            window.addEventListener('resize', function () {
                if (window.innerWidth > 900) closeExplorer();
            });

            /* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
               13. BOOT
               â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */

            renderExplorer();
            renderTabs();
            renderEditor();

            if (window.innerWidth < 900) {
                toggleTerminal(true);
            } else {
                setTimeout(function () { termInput.focus(); }, 200);
            }
        })();
    
