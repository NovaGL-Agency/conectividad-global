const projects = [
    {
        index: "01",
        image: "https://i.imgur.com/qlEQMum.png",
        name: "Colegio Rochester - Contenido en la Revista Semana",
        description: "Junto con el Colegio Rochester diseñamos una estrategia en colaboración con Revista Semana para informar a padres de familia sobre la innovación pedagígica del colegio. ",
        features: [
            {
                icon: `<svg width="24" height="25" viewBox="0 0 24 25" fill="none"><path d="M3 13.625C3 13.0037 3.50368 12.5 4.125 12.5H6.375C6.99632 12.5 7.5 13.0037 7.5 13.625V20.375C7.5 20.9963 6.99632 21.5 6.375 21.5H4.125C3.50368 21.5 3 20.9963 3 20.375V13.625Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M9.75 9.125C9.75 8.50368 10.2537 8 10.875 8H13.125C13.7463 8 14.25 8.50368 14.25 9.125V20.375C14.25 20.9963 13.7463 21.5 13.125 21.5H10.875C10.2537 21.5 9.75 20.9963 9.75 20.375V9.125Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M16.5 4.625C16.5 4.00368 17.0037 3.5 17.625 3.5H19.875C20.4963 3.5 21 4.00368 21 4.625V20.375C21 20.9963 20.4963 21.5 19.875 21.5H17.625C17.0037 21.5 16.5 20.9963 16.5 20.375V4.625Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
                name: "Feature 1",
            },
            {
                icon: `<svg width="24" height="25" viewBox="0 0 24 25" fill="none"><path d="M20.25 14.6499V18.9C20.25 19.9944 19.4631 20.9359 18.3782 21.08C16.2915 21.357 14.1624 21.5 12 21.5C9.83757 21.5 7.70854 21.357 5.62185 21.08C4.5369 20.9359 3.75 19.9944 3.75 18.9V14.6499M20.25 14.6499C20.7219 14.2476 21 13.6389 21 12.9889V9.20569C21 8.12475 20.2321 7.19082 19.1631 7.03086C18.0377 6.86247 16.8995 6.73315 15.75 6.64432M20.25 14.6499C20.0564 14.815 19.8302 14.9453 19.5771 15.0294C17.1953 15.8212 14.6477 16.25 12 16.25C9.35229 16.25 6.80469 15.8212 4.42289 15.0294C4.16984 14.9452 3.94361 14.8149 3.75 14.6499M3.75 14.6499C3.27808 14.2476 3 13.6389 3 12.9889V9.20569C3 8.12475 3.7679 7.19082 4.83694 7.03086C5.96233 6.86247 7.10049 6.73315 8.25 6.64432M15.75 6.64432V5.75C15.75 4.50736 14.7426 3.5 13.5 3.5H10.5C9.25736 3.5 8.25 4.50736 8.25 5.75V6.64432M15.75 6.64432C14.5126 6.5487 13.262 6.5 12 6.5C10.738 6.5 9.48744 6.5487 8.25 6.64432M12 13.25H12.0075V13.2575H12V13.25Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
                name: "Feature 2",
            },
            {
                icon: `<svg width="24" height="25" viewBox="0 0 24 25" fill="none"><path d="M6.75 3.5V5.75M17.25 3.5V5.75M3 19.25V8C3 6.75736 4.00736 5.75 5.25 5.75H18.75C19.9926 5.75 21 6.75736 21 8V19.25M3 19.25C3 20.4926 4.00736 21.5 5.25 21.5H18.75C19.9926 21.5 21 20.4926 21 19.25M3 19.25V11.75C3 10.5074 4.00736 9.5 5.25 9.5H18.75C19.9926 9.5 21 10.5074 21 11.75V19.25M12 13.25H12.0075V13.2575H12V13.25ZM12 15.5H12.0075V15.5075H12V15.5ZM12 17.75H12.0075V17.7575H12V17.75ZM9.75 15.5H9.7575V15.5075H9.75V15.5ZM9.75 17.75H9.7575V17.7575H9.75V17.75ZM7.5 15.5H7.5075V15.5075H7.5V15.5ZM7.5 17.75H7.5075V17.7575H7.5V17.75ZM14.25 13.25H14.2575V13.2575H14.25V13.25ZM14.25 15.5H14.2575V15.5075H14.25V15.5ZM14.25 17.75H14.2575V17.7575H14.25V17.75ZM16.5 13.25H16.5075V13.2575H16.5V13.25ZM16.5 15.5H16.5075V15.5075H16.5V15.5Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
                name: "Feature 3",
            },
        ],
        category: "Category 1",
        client: "Colegio Rochester",
        startdate: "Start Date 1",
        enddate: "End Date 1",
        teams: [
            {
                name: "Web Developers",
                data: [
                    {
                        image: "https://i.imgur.com/001SF3d.png",
                        name: "Description 1",
                    },
                    {
                        image: "https://i.imgur.com/001SF3d.png",
                        name: "Description 2",
                    },
                ],
            },
            {
                name: "Area 2",
                data: [
                    {
                        image: "https://i.imgur.com/001SF3d.png",
                        name: "Description 1",
                    },
                    {
                        image: "https://i.imgur.com/001SF3d.png",
                        name: "Description 2",
                    },
                ],
            },
            {
                name: "Area 3",
                data: [
                    {
                        image: "https://i.imgur.com/001SF3d.png",
                        name: "Description 1",
                    },
                    {
                        image: "https://i.imgur.com/001SF3d.png",
                        name: "Description 2",
                    },
                ],
            }
        ],
        satisfaction: "700.000 vistas",
        scope: "150.000 impresiones",
        roi: "2.500 clics/ interacciones",
        comments: "Estamos muy contentos con el resultado del proyecto dado que se entregó en tiempo y forma. Adicionalmente, el equipo de trabajo fue muy profesional y atento a nuestras necesidades.",
    },
    {
        index: "02",
        image: "https://imgur.com/Fjv7vbN.jpeg",
        name: "Camara Colombiana de la Infraestructura",
        description: "Como parte de nuestra estrategia para promover el Congreso de Infraestructura, publicamos un aviso de pauta comercial Revista Semana, alcanzando una audiencia ámplia.",
        features: [
            {
                icon: `<svg width="24" height="25" viewBox="0 0 24 25" fill="none"><path d="M3 13.625C3 13.0037 3.50368 12.5 4.125 12.5H6.375C6.99632 12.5 7.5 13.0037 7.5 13.625V20.375C7.5 20.9963 6.99632 21.5 6.375 21.5H4.125C3.50368 21.5 3 20.9963 3 20.375V13.625Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M9.75 9.125C9.75 8.50368 10.2537 8 10.875 8H13.125C13.7463 8 14.25 8.50368 14.25 9.125V20.375C14.25 20.9963 13.7463 21.5 13.125 21.5H10.875C10.2537 21.5 9.75 20.9963 9.75 20.375V9.125Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M16.5 4.625C16.5 4.00368 17.0037 3.5 17.625 3.5H19.875C20.4963 3.5 21 4.00368 21 4.625V20.375C21 20.9963 20.4963 21.5 19.875 21.5H17.625C17.0037 21.5 16.5 20.9963 16.5 20.375V4.625Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
                name: "Feature 1",
            },
            {
                icon: `<svg width="24" height="25" viewBox="0 0 24 25" fill="none"><path d="M20.25 14.6499V18.9C20.25 19.9944 19.4631 20.9359 18.3782 21.08C16.2915 21.357 14.1624 21.5 12 21.5C9.83757 21.5 7.70854 21.357 5.62185 21.08C4.5369 20.9359 3.75 19.9944 3.75 18.9V14.6499M20.25 14.6499C20.7219 14.2476 21 13.6389 21 12.9889V9.20569C21 8.12475 20.2321 7.19082 19.1631 7.03086C18.0377 6.86247 16.8995 6.73315 15.75 6.64432M20.25 14.6499C20.0564 14.815 19.8302 14.9453 19.5771 15.0294C17.1953 15.8212 14.6477 16.25 12 16.25C9.35229 16.25 6.80469 15.8212 4.42289 15.0294C4.16984 14.9452 3.94361 14.8149 3.75 14.6499M3.75 14.6499C3.27808 14.2476 3 13.6389 3 12.9889V9.20569C3 8.12475 3.7679 7.19082 4.83694 7.03086C5.96233 6.86247 7.10049 6.73315 8.25 6.64432M15.75 6.64432V5.75C15.75 4.50736 14.7426 3.5 13.5 3.5H10.5C9.25736 3.5 8.25 4.50736 8.25 5.75V6.64432M15.75 6.64432C14.5126 6.5487 13.262 6.5 12 6.5C10.738 6.5 9.48744 6.5487 8.25 6.64432M12 13.25H12.0075V13.2575H12V13.25Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
                name: "Feature 2",
            },
            {
                icon: `<svg width="24" height="25" viewBox="0 0 24 25" fill="none"><path d="M6.75 3.5V5.75M17.25 3.5V5.75M3 19.25V8C3 6.75736 4.00736 5.75 5.25 5.75H18.75C19.9926 5.75 21 6.75736 21 8V19.25M3 19.25C3 20.4926 4.00736 21.5 5.25 21.5H18.75C19.9926 21.5 21 20.4926 21 19.25M3 19.25V11.75C3 10.5074 4.00736 9.5 5.25 9.5H18.75C19.9926 9.5 21 10.5074 21 11.75V19.25M12 13.25H12.0075V13.2575H12V13.25ZM12 15.5H12.0075V15.5075H12V15.5ZM12 17.75H12.0075V17.7575H12V17.75ZM9.75 15.5H9.7575V15.5075H9.75V15.5ZM9.75 17.75H9.7575V17.7575H9.75V17.75ZM7.5 15.5H7.5075V15.5075H7.5V15.5ZM7.5 17.75H7.5075V17.7575H7.5V17.75ZM14.25 13.25H14.2575V13.2575H14.25V13.25ZM14.25 15.5H14.2575V15.5075H14.25V15.5ZM14.25 17.75H14.2575V17.7575H14.25V17.75ZM16.5 13.25H16.5075V13.2575H16.5V13.25ZM16.5 15.5H16.5075V15.5075H16.5V15.5Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
                name: "Feature 3",
            },
        ],
        category: "Category 1",
        client: "Client 1",
        startdate: "Start Date 1",
        enddate: "End Date 1",
        teams: [
            {
                name: "Web Developers",
                data: [
                    {
                        image: "https://i.imgur.com/001SF3d.png",
                        name: "Description 1",
                    },
                    {
                        image: "https://i.imgur.com/001SF3d.png",
                        name: "Description 2",
                    },
                ],
            },
            {
                name: "Area 2",
                data: [
                    {
                        image: "https://i.imgur.com/001SF3d.png",
                        name: "Description 1",
                    },
                    {
                        image: "https://i.imgur.com/001SF3d.png",
                        name: "Description 2",
                    },
                ],
            },
            {
                name: "Area 3",
                data: [
                    {
                        image: "https://i.imgur.com/001SF3d.png",
                        name: "Description 1",
                    },
                    {
                        image: "https://i.imgur.com/001SF3d.png",
                        name: "Description 2",
                    },
                ],
            }
        ],
        satisfaction: "1.17MM lectores",
        scope: "N/A",
        roi: "N/A",
        comments: "Estamos muy contentos con el resultado del proyecto dado que se entregó en tiempo y forma. Adicionalmente, el equipo de trabajo fue muy profesional y atento a nuestras necesidades.",
    },
    {
        index: "03",
        image: "https://i.imgur.com/CIbS6P3.png",
        videoUrl:"https://drive.google.com/file/d/1FsffArapY37rSfuj5oh0jH38u8u-vgTV/preview",
        name: "Pengin Random House - Proyección en la Torre Colpatria y Cuñas de Radio",
        description: "En colaboración con la editorial Penguin Random House realizamos el lanzamiento de la obra pósuma 'En agosto nos Vemos' de Gabriel Gacía Márquez, a través de un escenario atípico: la Torre Colpatria.",
        features: [
            {
                icon: `<svg width="24" height="25" viewBox="0 0 24 25" fill="none"><path d="M3 13.625C3 13.0037 3.50368 12.5 4.125 12.5H6.375C6.99632 12.5 7.5 13.0037 7.5 13.625V20.375C7.5 20.9963 6.99632 21.5 6.375 21.5H4.125C3.50368 21.5 3 20.9963 3 20.375V13.625Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M9.75 9.125C9.75 8.50368 10.2537 8 10.875 8H13.125C13.7463 8 14.25 8.50368 14.25 9.125V20.375C14.25 20.9963 13.7463 21.5 13.125 21.5H10.875C10.2537 21.5 9.75 20.9963 9.75 20.375V9.125Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M16.5 4.625C16.5 4.00368 17.0037 3.5 17.625 3.5H19.875C20.4963 3.5 21 4.00368 21 4.625V20.375C21 20.9963 20.4963 21.5 19.875 21.5H17.625C17.0037 21.5 16.5 20.9963 16.5 20.375V4.625Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
                name: "Feature 1",
            },
            {
                icon: `<svg width="24" height="25" viewBox="0 0 24 25" fill="none"><path d="M20.25 14.6499V18.9C20.25 19.9944 19.4631 20.9359 18.3782 21.08C16.2915 21.357 14.1624 21.5 12 21.5C9.83757 21.5 7.70854 21.357 5.62185 21.08C4.5369 20.9359 3.75 19.9944 3.75 18.9V14.6499M20.25 14.6499C20.7219 14.2476 21 13.6389 21 12.9889V9.20569C21 8.12475 20.2321 7.19082 19.1631 7.03086C18.0377 6.86247 16.8995 6.73315 15.75 6.64432M20.25 14.6499C20.0564 14.815 19.8302 14.9453 19.5771 15.0294C17.1953 15.8212 14.6477 16.25 12 16.25C9.35229 16.25 6.80469 15.8212 4.42289 15.0294C4.16984 14.9452 3.94361 14.8149 3.75 14.6499M3.75 14.6499C3.27808 14.2476 3 13.6389 3 12.9889V9.20569C3 8.12475 3.7679 7.19082 4.83694 7.03086C5.96233 6.86247 7.10049 6.73315 8.25 6.64432M15.75 6.64432V5.75C15.75 4.50736 14.7426 3.5 13.5 3.5H10.5C9.25736 3.5 8.25 4.50736 8.25 5.75V6.64432M15.75 6.64432C14.5126 6.5487 13.262 6.5 12 6.5C10.738 6.5 9.48744 6.5487 8.25 6.64432M12 13.25H12.0075V13.2575H12V13.25Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
                name: "Feature 2",
            },
            {
                icon: `<svg width="24" height="25" viewBox="0 0 24 25" fill="none"><path d="M6.75 3.5V5.75M17.25 3.5V5.75M3 19.25V8C3 6.75736 4.00736 5.75 5.25 5.75H18.75C19.9926 5.75 21 6.75736 21 8V19.25M3 19.25C3 20.4926 4.00736 21.5 5.25 21.5H18.75C19.9926 21.5 21 20.4926 21 19.25M3 19.25V11.75C3 10.5074 4.00736 9.5 5.25 9.5H18.75C19.9926 9.5 21 10.5074 21 11.75V19.25M12 13.25H12.0075V13.2575H12V13.25ZM12 15.5H12.0075V15.5075H12V15.5ZM12 17.75H12.0075V17.7575H12V17.75ZM9.75 15.5H9.7575V15.5075H9.75V15.5ZM9.75 17.75H9.7575V17.7575H9.75V17.75ZM7.5 15.5H7.5075V15.5075H7.5V15.5ZM7.5 17.75H7.5075V17.7575H7.5V17.75ZM14.25 13.25H14.2575V13.2575H14.25V13.25ZM14.25 15.5H14.2575V15.5075H14.25V15.5ZM14.25 17.75H14.2575V17.7575H14.25V17.75ZM16.5 13.25H16.5075V13.2575H16.5V13.25ZM16.5 15.5H16.5075V15.5075H16.5V15.5Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
                name: "Feature 3",
            },
        ],
        category: "Category 1",
        client: "Client 1",
        startdate: "Start Date 1",
        enddate: "End Date 1",
        teams: [
            {
                name: "Web Developers",
                data: [
                    {
                        image: "https://i.imgur.com/001SF3d.png",
                        name: "Description 1",
                    },
                    {
                        image: "https://i.imgur.com/001SF3d.png",
                        name: "Description 2",
                    },
                ],
            },
            {
                name: "Area 2",
                data: [
                    {
                        image: "https://i.imgur.com/001SF3d.png",
                        name: "Description 1",
                    },
                    {
                        image: "https://i.imgur.com/001SF3d.png",
                        name: "Description 2",
                    },
                ],
            },
            {
                name: "Area 3",
                data: [
                    {
                        image: "https://i.imgur.com/001SF3d.png",
                        name: "Description 1",
                    },
                    {
                        image: "https://i.imgur.com/001SF3d.png",
                        name: "Description 2",
                    },
                ],
            }
        ],
        satisfaction: "N/A",
        scope: "N/A",
        roi: "1,4MM oyentes",
        comments: "Estamos muy contentos con el resultado del proyecto dado que se entregó en tiempo y forma. Adicionalmente, el equipo de trabajo fue muy profesional y atento a nuestras necesidades.",
    },
    {
        index: "04",
        image: "https://i.imgur.com/9Gai6ZH.jpg",
        videoUrl: "https://www.youtube.com/embed/gB24HjWAejU?si=A456q3fHviJap7PI",
        name: "Summum Projects - Contenido y Video Entrevista en Portafolio",
        description: "En asociación con Portafolio, llevamos a cabo una estrategia digital para aumentar la visibilidad de la marca Summum. ",
        features: [
            {
                icon: `<svg width="24" height="25" viewBox="0 0 24 25" fill="none"><path d="M3 13.625C3 13.0037 3.50368 12.5 4.125 12.5H6.375C6.99632 12.5 7.5 13.0037 7.5 13.625V20.375C7.5 20.9963 6.99632 21.5 6.375 21.5H4.125C3.50368 21.5 3 20.9963 3 20.375V13.625Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M9.75 9.125C9.75 8.50368 10.2537 8 10.875 8H13.125C13.7463 8 14.25 8.50368 14.25 9.125V20.375C14.25 20.9963 13.7463 21.5 13.125 21.5H10.875C10.2537 21.5 9.75 20.9963 9.75 20.375V9.125Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M16.5 4.625C16.5 4.00368 17.0037 3.5 17.625 3.5H19.875C20.4963 3.5 21 4.00368 21 4.625V20.375C21 20.9963 20.4963 21.5 19.875 21.5H17.625C17.0037 21.5 16.5 20.9963 16.5 20.375V4.625Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
                name: "Feature 1",
            },
            {
                icon: `<svg width="24" height="25" viewBox="0 0 24 25" fill="none"><path d="M20.25 14.6499V18.9C20.25 19.9944 19.4631 20.9359 18.3782 21.08C16.2915 21.357 14.1624 21.5 12 21.5C9.83757 21.5 7.70854 21.357 5.62185 21.08C4.5369 20.9359 3.75 19.9944 3.75 18.9V14.6499M20.25 14.6499C20.7219 14.2476 21 13.6389 21 12.9889V9.20569C21 8.12475 20.2321 7.19082 19.1631 7.03086C18.0377 6.86247 16.8995 6.73315 15.75 6.64432M20.25 14.6499C20.0564 14.815 19.8302 14.9453 19.5771 15.0294C17.1953 15.8212 14.6477 16.25 12 16.25C9.35229 16.25 6.80469 15.8212 4.42289 15.0294C4.16984 14.9452 3.94361 14.8149 3.75 14.6499M3.75 14.6499C3.27808 14.2476 3 13.6389 3 12.9889V9.20569C3 8.12475 3.7679 7.19082 4.83694 7.03086C5.96233 6.86247 7.10049 6.73315 8.25 6.64432M15.75 6.64432V5.75C15.75 4.50736 14.7426 3.5 13.5 3.5H10.5C9.25736 3.5 8.25 4.50736 8.25 5.75V6.64432M15.75 6.64432C14.5126 6.5487 13.262 6.5 12 6.5C10.738 6.5 9.48744 6.5487 8.25 6.64432M12 13.25H12.0075V13.2575H12V13.25Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
                name: "Feature 2",
            },
            {
                icon: `<svg width="24" height="25" viewBox="0 0 24 25" fill="none"><path d="M6.75 3.5V5.75M17.25 3.5V5.75M3 19.25V8C3 6.75736 4.00736 5.75 5.25 5.75H18.75C19.9926 5.75 21 6.75736 21 8V19.25M3 19.25C3 20.4926 4.00736 21.5 5.25 21.5H18.75C19.9926 21.5 21 20.4926 21 19.25M3 19.25V11.75C3 10.5074 4.00736 9.5 5.25 9.5H18.75C19.9926 9.5 21 10.5074 21 11.75V19.25M12 13.25H12.0075V13.2575H12V13.25ZM12 15.5H12.0075V15.5075H12V15.5ZM12 17.75H12.0075V17.7575H12V17.75ZM9.75 15.5H9.7575V15.5075H9.75V15.5ZM9.75 17.75H9.7575V17.7575H9.75V17.75ZM7.5 15.5H7.5075V15.5075H7.5V15.5ZM7.5 17.75H7.5075V17.7575H7.5V17.75ZM14.25 13.25H14.2575V13.2575H14.25V13.25ZM14.25 15.5H14.2575V15.5075H14.25V15.5ZM14.25 17.75H14.2575V17.7575H14.25V17.75ZM16.5 13.25H16.5075V13.2575H16.5V13.25ZM16.5 15.5H16.5075V15.5075H16.5V15.5Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
                name: "Feature 3",
            },
        ],
        category: "Category 1",
        client: "Client 1",
        startdate: "Start Date 1",
        enddate: "End Date 1",
        teams: [
            {
                name: "Web Developers",
                data: [
                    {
                        image: "https://i.imgur.com/001SF3d.png",
                        name: "Description 1",
                    },
                    {
                        image: "https://i.imgur.com/001SF3d.png",
                        name: "Description 2",
                    },
                ],
            },
            {
                name: "Area 2",
                data: [
                    {
                        image: "https://i.imgur.com/001SF3d.png",
                        name: "Description 1",
                    },
                    {
                        image: "https://i.imgur.com/001SF3d.png",
                        name: "Description 2",
                    },
                ],
            },
            {
                name: "Area 3",
                data: [
                    {
                        image: "https://i.imgur.com/001SF3d.png",
                        name: "Description 1",
                    },
                    {
                        image: "https://i.imgur.com/001SF3d.png",
                        name: "Description 2",
                    },
                ],
            }
        ],
        satisfaction: "75.000 lectores",
        scope: "N/A",
        roi: "100.000 impresiones",
        comments: "Estamos muy contentos con el resultado del proyecto dado que se entregó en tiempo y forma. Adicionalmente, el equipo de trabajo fue muy profesional y atento a nuestras necesidades.",
    }
];

export default projects;