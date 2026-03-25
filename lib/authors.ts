/** Leadership bios aligned with /about — used on article pages and metadata. */
export type AuthorProfile = {
  role: string;
  bio: string;
  photo: string;
};

export const AUTHORS: Record<string, AuthorProfile> = {
  "Arman Abd Hamid": {
    role: "Managing Director",
    photo: "/team/arman-abd-hamid.png",
    bio: "Arman drives business growth and corporate operations with deep ICT, VR/AR, and AI expertise. He sets editorial direction for privacy, security, and emerging tech coverage at Deals Malaysia Daily.",
  },
  "Shahrozad Johar": {
    role: "Executive Director",
    photo: "/team/shahrozad-johar.png",
    bio: "Shahrozad brings decades of ICT, healthcare, and banking leadership to governance and strategic planning for the publication. He oversees partnerships, risk, and long-form reviews that involve major vendors.",
  },
  "Marzuky Yusuf": {
    role: "Director (Operation)",
    photo: "/team/marzuky-yusuf.png",
    bio: "Marzuky leads digital transformation and operations — from hosting benchmarks to marketplace deal tracking. He ensures testing methodology stays consistent as we scale reviews and shopping round-ups.",
  },
};

export function getAuthorProfile(name: string): AuthorProfile | undefined {
  return AUTHORS[name];
}
