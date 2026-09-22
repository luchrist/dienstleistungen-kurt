export interface GalleryItem {
  src: string;
  alt: string;
}

// Curated for the gallery layout: a finished showcase first, followed by a
// varied mix of work in progress, detail work and specialist services.
export const galleryItems: GalleryItem[] = [
  {
    src: "/assets/leistungen/gartenneugestaltung-mit-beleuchtung.webp",
    alt: "Fertig gestalteter Garten mit Wegen, Beeten und stimmungsvoller Beleuchtung"
  },
  {
    src: "/assets/leistungen/pflasterarbeiten-terrasse.webp",
    alt: "Landschaftsgärtner beim Verlegen großformatiger Terrassenplatten"
  },
  {
    src: "/assets/leistungen/terrassenbau-grossformatplatten-02.webp",
    alt: "Terrasse aus großformatigen Platten mit sauberem Randabschluss"
  },
  {
    src: "/assets/leistungen/baumpflege-klettertechnik.webp",
    alt: "Baumpflege in der Krone mit Seilklettertechnik"
  },
  {
    src: "/assets/leistungen/zaun-und-sichtschutz.webp",
    alt: "Montierter Sichtschutzzaun entlang einer Grundstücksgrenze"
  }
];
