import { v4 as uuidv4 } from "uuid"; 

function chillHop() {
    return [

        {
            name:"Hope",
            artist: "Hope",
            cover: "https://img.freepik.com/vector-gratis/texto-plano-dia-mundial-radio_23-2148825802.jpg",
            id: uuidv4(),
            color: ["#F24933", "#F9B437"],
            audio: "https://stream.hopemedia.com.au/hope",
            active: true,
        },
        {
            name:"RHema",
            artist: "RHema",
            cover: "https://img.freepik.com/vector-gratis/ilustracion-realista-auriculares-inalambricos_1284-20763.jpg",
            id: uuidv4(),
            color: ["#D7B0D5", "#CBDFE0"],
            audio: "https://25703.live.streamtheworld.com/RHEMA_FM_SC",
            active: false,
        },
        {
            name:"Gospel premier",
            artist: "Gospelpremier",
            cover: "https://img.freepik.com/foto-gratis/dispositivo-digital-inalambrico-auriculares-rosa_53876-96804.jpg",
            id: uuidv4(),
            color: ["#1D2731", "#F17E76"],
            audio: "https://audio-edge-es6pf.mia.g.radiomast.io/31ecbab9-e64f-44a3-8afa-fe58745e82c8",
            active: false,
        },
        {
            name:"Groot Nieuws",
            artist: "GrootNieuws",
            cover: "https://img.freepik.com/vector-gratis/fondo-retro-dia-mundial-radio_23-2147594195.jpg",
            id: uuidv4(),
            color: ["#008781", "#cfc08c"],
            audio: "https://23623.live.streamtheworld.com/GNRAAC_SC",
            active: false,
        },
        {
            name:"Gospel radio",
            artist: "Gospelradio",
            cover: "https://img.freepik.com/vector-gratis/fondo-onda-ecualizador-colorido_52683-33072.jpg",
            id: uuidv4(),
            color: ["#845648","#FDFBDF"],
            audio: "https://www.appradio.app:8161/live",
            active: false,
        },
        {
            name:"Radio vida fm",
            artist: "Radiovidafm",
            cover: "https://cdn-icons-png.flaticon.com/512/1251/1251671.png",
            id: uuidv4(),
            color: ["#578CCE", "#E9D6D0"],
            audio: "https://hts06.kshost.com.br:9294/stream/1/",
            active: false,
        },
        {
            name:"BOX : Gospel Plus",
            artist: "BOXGospelPlus",
            cover: "https://img.freepik.com/psd-gratis/maqueta-reproductor-multimedia-rose-gold-maqueta-reproductor-multimedia-rose-gold-3d_106244-1745.jpg",
            id: uuidv4(),
            color: ["#191516", "#82698E"],
            audio: "https://boxradio-edge-07.streamafrica.net/gospelplus",
            active: false,
        },
        {
            name:"Nou Temps Radio",
            artist: "NouTempsRadio",
            cover: "https://img.freepik.com/foto-gratis/microfono-moderno_144627-41311.jpg",
            id: uuidv4(),
            color: ["#7BC8DD", "#D64A59"],
            audio: "https://n06.radiojar.com/kr7r6x2gmg5tv?rj-ttl=5&rj-tok=AAABgkuan7gAPWsBbvsNwP0r9g",
            active: false,
        },
        {
            name:"WXHL Reach Gospel Radio",
            artist: "WXHLReachGospelRadio",
            cover: "https://img.freepik.com/psd-gratis/maqueta-reproductor-multimedia-rose-gold-maqueta-reproductor-multimedia-rose-gold-3d_106244-1745.jpg",
            id: uuidv4(),
            color: ["#FDE1A9", "#A46874"],
            audio: "https://ice7.securenetsystems.net/WXHL",
            active: false,
        },
    ];
}

export default chillHop;


