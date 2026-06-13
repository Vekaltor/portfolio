import type {Recommendation} from "../types/recommendation.interface.ts";

import kacperAvatar from '@assets/people/kacper.webp'
import sebastianAvatar from '@assets/people/sebastian.webp'
import bartekAvatar from '@assets/people/bartek.webp'

export const TESTIMONIALS: Recommendation[] = [
    {
        quoteKey: 't1q',
        roleKey: 't1r',
        name: 'Kacper Woliński',
        avatarSrc: kacperAvatar,
        linkedin: 'https://www.linkedin.com/in/kamil-w%C3%B3jcik-0bbba4276/details/recommendations/',
    },
    {
        quoteKey: 't2q',
        roleKey: 't2r',
        name: 'Sebastian Pola',
        avatarSrc: sebastianAvatar,
        linkedin: 'https://www.linkedin.com/in/kamil-w%C3%B3jcik-0bbba4276/details/recommendations/',
    },
    {
        quoteKey: 't3q',
        roleKey: 't3r',
        name: 'Bartłomiej Laskowski',
        avatarSrc: bartekAvatar,
        linkedin: 'https://www.linkedin.com/in/kamil-w%C3%B3jcik-0bbba4276/details/recommendations/',
    },
]
