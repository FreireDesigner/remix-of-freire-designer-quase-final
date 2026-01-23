import { useState, useEffect, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import WaveDivider from "@/components/WaveDivider";
import { Sparkles, ArrowRight, Users, Shirt, MessageCircle, Zap, Crown, Star } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type TipoModelo = "Sublimações" | "Estampas";

const stats = [
  { value: "5+", label: "Anos no Mercado" },
  { value: "1000+", label: "Personagens" },
  { value: "98%", label: "Satisfação" },
];

const bestSellersSublimacao = [
  { name: "Personagem Best Seller 1", sales: "450+ vendidos", price: 89.90, isExclusive: true },
  { name: "Personagem Best Seller 2", sales: "380+ vendidos", price: 94.90, isExclusive: false },
  { name: "Personagem Best Seller 3", sales: "320+ vendidos", price: 79.90, isExclusive: false },
  { name: "Personagem Best Seller 4", sales: "410+ vendidos", price: 84.90, isExclusive: true },
  { name: "Personagem Best Seller 5", sales: "290+ vendidos", price: 89.90, isExclusive: false },
  { name: "Personagem Best Seller 6", sales: "350+ vendidos", price: 94.90, isExclusive: false },
];

const bestSellersEstampa = [
  { name: "Estampa Best Seller 1", sales: "520+ vendidos", price: 69.90, isExclusive: true },
  { name: "Estampa Best Seller 2", sales: "480+ vendidos", price: 74.90, isExclusive: false },
  { name: "Estampa Best Seller 3", sales: "390+ vendidos", price: 64.90, isExclusive: false },
  { name: "Estampa Best Seller 4", sales: "440+ vendidos", price: 69.90, isExclusive: true },
  { name: "Estampa Best Seller 5", sales: "360+ vendidos", price: 74.90, isExclusive: false },
  { name: "Estampa Best Seller 6", sales: "410+ vendidos", price: 69.90, isExclusive: false },
];

// 100+ Pop items
const popSublimacao = [
  { name: "Pop Culture 1", type: "Marvel", price: 89.90, isExclusive: true },
  { name: "Pop Culture 2", type: "DC Comics", price: 89.90, isExclusive: false },
  { name: "Pop Culture 3", type: "Star Wars", price: 94.90, isExclusive: false },
  { name: "Pop Culture 4", type: "Harry Potter", price: 89.90, isExclusive: true },
  { name: "Pop Culture 5", type: "Stranger Things", price: 94.90, isExclusive: false },
  { name: "Pop Culture 6", type: "Breaking Bad", price: 89.90, isExclusive: false },
  { name: "Pop Culture 7", type: "Friends", price: 84.90, isExclusive: false },
  { name: "Pop Culture 8", type: "The Office", price: 99.90, isExclusive: true },
  { name: "Pop Culture 9", type: "Disney", price: 99.90, isExclusive: false },
  { name: "Pop Culture 10", type: "Pixar", price: 89.90, isExclusive: false },
  { name: "Pop Culture 11", type: "Homem-Aranha", price: 89.90, isExclusive: true },
  { name: "Pop Culture 12", type: "Batman", price: 89.90, isExclusive: false },
  { name: "Pop Culture 13", type: "Superman", price: 94.90, isExclusive: false },
  { name: "Pop Culture 14", type: "Vingadores", price: 89.90, isExclusive: true },
  { name: "Pop Culture 15", type: "X-Men", price: 94.90, isExclusive: false },
  { name: "Pop Culture 16", type: "Thor", price: 89.90, isExclusive: false },
  { name: "Pop Culture 17", type: "Hulk", price: 84.90, isExclusive: false },
  { name: "Pop Culture 18", type: "Capitão América", price: 99.90, isExclusive: true },
  { name: "Pop Culture 19", type: "Homem de Ferro", price: 99.90, isExclusive: false },
  { name: "Pop Culture 20", type: "Pantera Negra", price: 89.90, isExclusive: false },
  { name: "Pop Culture 21", type: "Guardiões da Galáxia", price: 89.90, isExclusive: true },
  { name: "Pop Culture 22", type: "Deadpool", price: 89.90, isExclusive: false },
  { name: "Pop Culture 23", type: "Wolverine", price: 94.90, isExclusive: false },
  { name: "Pop Culture 24", type: "Aquaman", price: 89.90, isExclusive: true },
  { name: "Pop Culture 25", type: "Flash", price: 94.90, isExclusive: false },
  { name: "Pop Culture 26", type: "Mulher Maravilha", price: 89.90, isExclusive: false },
  { name: "Pop Culture 27", type: "Liga da Justiça", price: 84.90, isExclusive: false },
  { name: "Pop Culture 28", type: "Coringa", price: 99.90, isExclusive: true },
  { name: "Pop Culture 29", type: "Game of Thrones", price: 99.90, isExclusive: false },
  { name: "Pop Culture 30", type: "The Witcher", price: 89.90, isExclusive: false },
  { name: "Pop Culture 31", type: "Mandalorian", price: 89.90, isExclusive: true },
  { name: "Pop Culture 32", type: "Baby Yoda", price: 89.90, isExclusive: false },
  { name: "Pop Culture 33", type: "Rick and Morty", price: 94.90, isExclusive: false },
  { name: "Pop Culture 34", type: "Simpsons", price: 89.90, isExclusive: true },
  { name: "Pop Culture 35", type: "South Park", price: 94.90, isExclusive: false },
];

const popEstampa = [
  { name: "Pop Estampa 1", type: "Marvel", price: 69.90, isExclusive: true },
  { name: "Pop Estampa 2", type: "DC Comics", price: 69.90, isExclusive: false },
  { name: "Pop Estampa 3", type: "Star Wars", price: 74.90, isExclusive: false },
  { name: "Pop Estampa 4", type: "Harry Potter", price: 69.90, isExclusive: true },
  { name: "Pop Estampa 5", type: "Stranger Things", price: 74.90, isExclusive: false },
  { name: "Pop Estampa 6", type: "Breaking Bad", price: 69.90, isExclusive: false },
  { name: "Pop Estampa 7", type: "Friends", price: 64.90, isExclusive: false },
  { name: "Pop Estampa 8", type: "The Office", price: 79.90, isExclusive: true },
  { name: "Pop Estampa 9", type: "Disney", price: 79.90, isExclusive: false },
  { name: "Pop Estampa 10", type: "Pixar", price: 69.90, isExclusive: false },
  { name: "Pop Estampa 11", type: "Homem-Aranha", price: 69.90, isExclusive: true },
  { name: "Pop Estampa 12", type: "Batman", price: 69.90, isExclusive: false },
  { name: "Pop Estampa 13", type: "Superman", price: 74.90, isExclusive: false },
  { name: "Pop Estampa 14", type: "Vingadores", price: 69.90, isExclusive: true },
  { name: "Pop Estampa 15", type: "X-Men", price: 74.90, isExclusive: false },
  { name: "Pop Estampa 16", type: "Thor", price: 69.90, isExclusive: false },
  { name: "Pop Estampa 17", type: "Hulk", price: 64.90, isExclusive: false },
  { name: "Pop Estampa 18", type: "Capitão América", price: 79.90, isExclusive: true },
  { name: "Pop Estampa 19", type: "Homem de Ferro", price: 79.90, isExclusive: false },
  { name: "Pop Estampa 20", type: "Pantera Negra", price: 69.90, isExclusive: false },
  { name: "Pop Estampa 21", type: "Guardiões da Galáxia", price: 69.90, isExclusive: true },
  { name: "Pop Estampa 22", type: "Deadpool", price: 69.90, isExclusive: false },
  { name: "Pop Estampa 23", type: "Wolverine", price: 74.90, isExclusive: false },
  { name: "Pop Estampa 24", type: "Aquaman", price: 69.90, isExclusive: true },
  { name: "Pop Estampa 25", type: "Flash", price: 74.90, isExclusive: false },
  { name: "Pop Estampa 26", type: "Mulher Maravilha", price: 69.90, isExclusive: false },
  { name: "Pop Estampa 27", type: "Liga da Justiça", price: 64.90, isExclusive: false },
  { name: "Pop Estampa 28", type: "Coringa", price: 79.90, isExclusive: true },
  { name: "Pop Estampa 29", type: "Game of Thrones", price: 79.90, isExclusive: false },
  { name: "Pop Estampa 30", type: "The Witcher", price: 69.90, isExclusive: false },
  { name: "Pop Estampa 31", type: "Mandalorian", price: 69.90, isExclusive: true },
  { name: "Pop Estampa 32", type: "Baby Yoda", price: 69.90, isExclusive: false },
  { name: "Pop Estampa 33", type: "Rick and Morty", price: 74.90, isExclusive: false },
  { name: "Pop Estampa 34", type: "Simpsons", price: 69.90, isExclusive: true },
  { name: "Pop Estampa 35", type: "South Park", price: 74.90, isExclusive: false },
];

// 50+ Anime items
const animesSublimacao = [
  { name: "Anime 1", type: "Naruto", price: 89.90, isExclusive: false },
  { name: "Anime 2", type: "Dragon Ball", price: 89.90, isExclusive: true },
  { name: "Anime 3", type: "One Piece", price: 84.90, isExclusive: false },
  { name: "Anime 4", type: "Demon Slayer", price: 84.90, isExclusive: false },
  { name: "Anime 5", type: "Attack on Titan", price: 79.90, isExclusive: true },
  { name: "Anime 6", type: "My Hero Academia", price: 89.90, isExclusive: false },
  { name: "Anime 7", type: "Jujutsu Kaisen", price: 84.90, isExclusive: false },
  { name: "Anime 8", type: "Death Note", price: 94.90, isExclusive: false },
  { name: "Anime 9", type: "Fullmetal Alchemist", price: 94.90, isExclusive: true },
  { name: "Anime 10", type: "Hunter x Hunter", price: 89.90, isExclusive: false },
  { name: "Anime 11", type: "Bleach", price: 89.90, isExclusive: false },
  { name: "Anime 12", type: "Tokyo Ghoul", price: 89.90, isExclusive: true },
  { name: "Anime 13", type: "Spy x Family", price: 84.90, isExclusive: false },
  { name: "Anime 14", type: "Chainsaw Man", price: 84.90, isExclusive: false },
  { name: "Anime 15", type: "One Punch Man", price: 79.90, isExclusive: true },
  { name: "Anime 16", type: "Mob Psycho 100", price: 89.90, isExclusive: false },
  { name: "Anime 17", type: "Black Clover", price: 84.90, isExclusive: false },
  { name: "Anime 18", type: "Fairy Tail", price: 94.90, isExclusive: false },
  { name: "Anime 19", type: "Sword Art Online", price: 94.90, isExclusive: true },
  { name: "Anime 20", type: "Re:Zero", price: 89.90, isExclusive: false },
  { name: "Anime 21", type: "Konosuba", price: 89.90, isExclusive: false },
  { name: "Anime 22", type: "Overlord", price: 89.90, isExclusive: true },
  { name: "Anime 23", type: "Classroom of Elite", price: 84.90, isExclusive: false },
  { name: "Anime 24", type: "Dr. Stone", price: 84.90, isExclusive: false },
  { name: "Anime 25", type: "Fire Force", price: 79.90, isExclusive: true },
  { name: "Anime 26", type: "Blue Lock", price: 89.90, isExclusive: false },
  { name: "Anime 27", type: "Haikyuu", price: 84.90, isExclusive: false },
  { name: "Anime 28", type: "Kuroko no Basket", price: 94.90, isExclusive: false },
  { name: "Anime 29", type: "Slam Dunk", price: 94.90, isExclusive: true },
  { name: "Anime 30", type: "Captain Tsubasa", price: 89.90, isExclusive: false },
  { name: "Anime 31", type: "Pokémon", price: 89.90, isExclusive: false },
  { name: "Anime 32", type: "Digimon", price: 89.90, isExclusive: true },
  { name: "Anime 33", type: "Yu-Gi-Oh", price: 84.90, isExclusive: false },
  { name: "Anime 34", type: "Beyblade", price: 84.90, isExclusive: false },
  { name: "Anime 35", type: "Inuyasha", price: 79.90, isExclusive: true },
  { name: "Anime 36", type: "Cowboy Bebop", price: 89.90, isExclusive: false },
  { name: "Anime 37", type: "Neon Genesis", price: 84.90, isExclusive: false },
  { name: "Anime 38", type: "Ghost in the Shell", price: 94.90, isExclusive: false },
  { name: "Anime 39", type: "Steins Gate", price: 94.90, isExclusive: true },
  { name: "Anime 40", type: "Code Geass", price: 89.90, isExclusive: false },
];

const animesEstampa = [
  { name: "Anime Estampa 1", type: "Naruto", price: 69.90, isExclusive: false },
  { name: "Anime Estampa 2", type: "Dragon Ball", price: 69.90, isExclusive: true },
  { name: "Anime Estampa 3", type: "One Piece", price: 64.90, isExclusive: false },
  { name: "Anime Estampa 4", type: "Demon Slayer", price: 64.90, isExclusive: false },
  { name: "Anime Estampa 5", type: "Attack on Titan", price: 59.90, isExclusive: true },
  { name: "Anime Estampa 6", type: "My Hero Academia", price: 69.90, isExclusive: false },
  { name: "Anime Estampa 7", type: "Jujutsu Kaisen", price: 64.90, isExclusive: false },
  { name: "Anime Estampa 8", type: "Death Note", price: 74.90, isExclusive: false },
  { name: "Anime Estampa 9", type: "Fullmetal Alchemist", price: 74.90, isExclusive: true },
  { name: "Anime Estampa 10", type: "Hunter x Hunter", price: 69.90, isExclusive: false },
  { name: "Anime Estampa 11", type: "Bleach", price: 69.90, isExclusive: false },
  { name: "Anime Estampa 12", type: "Tokyo Ghoul", price: 69.90, isExclusive: true },
  { name: "Anime Estampa 13", type: "Spy x Family", price: 64.90, isExclusive: false },
  { name: "Anime Estampa 14", type: "Chainsaw Man", price: 64.90, isExclusive: false },
  { name: "Anime Estampa 15", type: "One Punch Man", price: 59.90, isExclusive: true },
  { name: "Anime Estampa 16", type: "Mob Psycho 100", price: 69.90, isExclusive: false },
  { name: "Anime Estampa 17", type: "Black Clover", price: 64.90, isExclusive: false },
  { name: "Anime Estampa 18", type: "Fairy Tail", price: 74.90, isExclusive: false },
  { name: "Anime Estampa 19", type: "Sword Art Online", price: 74.90, isExclusive: true },
  { name: "Anime Estampa 20", type: "Re:Zero", price: 69.90, isExclusive: false },
  { name: "Anime Estampa 21", type: "Konosuba", price: 69.90, isExclusive: false },
  { name: "Anime Estampa 22", type: "Overlord", price: 69.90, isExclusive: true },
  { name: "Anime Estampa 23", type: "Classroom of Elite", price: 64.90, isExclusive: false },
  { name: "Anime Estampa 24", type: "Dr. Stone", price: 64.90, isExclusive: false },
  { name: "Anime Estampa 25", type: "Fire Force", price: 59.90, isExclusive: true },
  { name: "Anime Estampa 26", type: "Blue Lock", price: 69.90, isExclusive: false },
  { name: "Anime Estampa 27", type: "Haikyuu", price: 64.90, isExclusive: false },
  { name: "Anime Estampa 28", type: "Kuroko no Basket", price: 74.90, isExclusive: false },
  { name: "Anime Estampa 29", type: "Slam Dunk", price: 74.90, isExclusive: true },
  { name: "Anime Estampa 30", type: "Captain Tsubasa", price: 69.90, isExclusive: false },
  { name: "Anime Estampa 31", type: "Pokémon", price: 69.90, isExclusive: false },
  { name: "Anime Estampa 32", type: "Digimon", price: 69.90, isExclusive: true },
  { name: "Anime Estampa 33", type: "Yu-Gi-Oh", price: 64.90, isExclusive: false },
  { name: "Anime Estampa 34", type: "Beyblade", price: 64.90, isExclusive: false },
  { name: "Anime Estampa 35", type: "Inuyasha", price: 59.90, isExclusive: true },
  { name: "Anime Estampa 36", type: "Cowboy Bebop", price: 69.90, isExclusive: false },
  { name: "Anime Estampa 37", type: "Neon Genesis", price: 64.90, isExclusive: false },
  { name: "Anime Estampa 38", type: "Ghost in the Shell", price: 74.90, isExclusive: false },
  { name: "Anime Estampa 39", type: "Steins Gate", price: 74.90, isExclusive: true },
  { name: "Anime Estampa 40", type: "Code Geass", price: 69.90, isExclusive: false },
];

// 40+ Games items
const gamesSublimacao = [
  { name: "Game 1", type: "Minecraft", price: 94.90, isExclusive: true },
  { name: "Game 2", type: "Fortnite", price: 89.90, isExclusive: false },
  { name: "Game 3", type: "GTA", price: 89.90, isExclusive: true },
  { name: "Game 4", type: "FIFA", price: 94.90, isExclusive: false },
  { name: "Game 5", type: "Call of Duty", price: 89.90, isExclusive: false },
  { name: "Game 6", type: "League of Legends", price: 89.90, isExclusive: false },
  { name: "Game 7", type: "Valorant", price: 94.90, isExclusive: true },
  { name: "Game 8", type: "CS:GO", price: 84.90, isExclusive: false },
  { name: "Game 9", type: "Free Fire", price: 99.90, isExclusive: false },
  { name: "Game 10", type: "Roblox", price: 89.90, isExclusive: false },
  { name: "Game 11", type: "Among Us", price: 94.90, isExclusive: true },
  { name: "Game 12", type: "Fall Guys", price: 89.90, isExclusive: false },
  { name: "Game 13", type: "Apex Legends", price: 89.90, isExclusive: true },
  { name: "Game 14", type: "Overwatch", price: 94.90, isExclusive: false },
  { name: "Game 15", type: "Rainbow Six", price: 89.90, isExclusive: false },
  { name: "Game 16", type: "PUBG", price: 89.90, isExclusive: false },
  { name: "Game 17", type: "Rocket League", price: 94.90, isExclusive: true },
  { name: "Game 18", type: "NBA 2K", price: 84.90, isExclusive: false },
  { name: "Game 19", type: "Mortal Kombat", price: 99.90, isExclusive: false },
  { name: "Game 20", type: "Street Fighter", price: 89.90, isExclusive: false },
  { name: "Game 21", type: "Tekken", price: 94.90, isExclusive: true },
  { name: "Game 22", type: "Super Smash Bros", price: 89.90, isExclusive: false },
  { name: "Game 23", type: "Mario", price: 89.90, isExclusive: true },
  { name: "Game 24", type: "Zelda", price: 94.90, isExclusive: false },
  { name: "Game 25", type: "Sonic", price: 89.90, isExclusive: false },
  { name: "Game 26", type: "God of War", price: 89.90, isExclusive: false },
  { name: "Game 27", type: "The Last of Us", price: 94.90, isExclusive: true },
  { name: "Game 28", type: "Resident Evil", price: 84.90, isExclusive: false },
  { name: "Game 29", type: "Silent Hill", price: 99.90, isExclusive: false },
  { name: "Game 30", type: "Elden Ring", price: 89.90, isExclusive: false },
  { name: "Game 31", type: "Dark Souls", price: 94.90, isExclusive: true },
  { name: "Game 32", type: "Hogwarts Legacy", price: 89.90, isExclusive: false },
  { name: "Game 33", type: "Assassin's Creed", price: 89.90, isExclusive: true },
  { name: "Game 34", type: "Far Cry", price: 94.90, isExclusive: false },
  { name: "Game 35", type: "Red Dead", price: 89.90, isExclusive: false },
];

const gamesEstampa = [
  { name: "Game Estampa 1", type: "Minecraft", price: 74.90, isExclusive: true },
  { name: "Game Estampa 2", type: "Fortnite", price: 69.90, isExclusive: false },
  { name: "Game Estampa 3", type: "GTA", price: 69.90, isExclusive: true },
  { name: "Game Estampa 4", type: "FIFA", price: 74.90, isExclusive: false },
  { name: "Game Estampa 5", type: "Call of Duty", price: 69.90, isExclusive: false },
  { name: "Game Estampa 6", type: "League of Legends", price: 69.90, isExclusive: false },
  { name: "Game Estampa 7", type: "Valorant", price: 74.90, isExclusive: true },
  { name: "Game Estampa 8", type: "CS:GO", price: 64.90, isExclusive: false },
  { name: "Game Estampa 9", type: "Free Fire", price: 79.90, isExclusive: false },
  { name: "Game Estampa 10", type: "Roblox", price: 69.90, isExclusive: false },
  { name: "Game Estampa 11", type: "Among Us", price: 74.90, isExclusive: true },
  { name: "Game Estampa 12", type: "Fall Guys", price: 69.90, isExclusive: false },
  { name: "Game Estampa 13", type: "Apex Legends", price: 69.90, isExclusive: true },
  { name: "Game Estampa 14", type: "Overwatch", price: 74.90, isExclusive: false },
  { name: "Game Estampa 15", type: "Rainbow Six", price: 69.90, isExclusive: false },
  { name: "Game Estampa 16", type: "PUBG", price: 69.90, isExclusive: false },
  { name: "Game Estampa 17", type: "Rocket League", price: 74.90, isExclusive: true },
  { name: "Game Estampa 18", type: "NBA 2K", price: 64.90, isExclusive: false },
  { name: "Game Estampa 19", type: "Mortal Kombat", price: 79.90, isExclusive: false },
  { name: "Game Estampa 20", type: "Street Fighter", price: 69.90, isExclusive: false },
  { name: "Game Estampa 21", type: "Tekken", price: 74.90, isExclusive: true },
  { name: "Game Estampa 22", type: "Super Smash Bros", price: 69.90, isExclusive: false },
  { name: "Game Estampa 23", type: "Mario", price: 69.90, isExclusive: true },
  { name: "Game Estampa 24", type: "Zelda", price: 74.90, isExclusive: false },
  { name: "Game Estampa 25", type: "Sonic", price: 69.90, isExclusive: false },
  { name: "Game Estampa 26", type: "God of War", price: 69.90, isExclusive: false },
  { name: "Game Estampa 27", type: "The Last of Us", price: 74.90, isExclusive: true },
  { name: "Game Estampa 28", type: "Resident Evil", price: 64.90, isExclusive: false },
  { name: "Game Estampa 29", type: "Silent Hill", price: 79.90, isExclusive: false },
  { name: "Game Estampa 30", type: "Elden Ring", price: 69.90, isExclusive: false },
  { name: "Game Estampa 31", type: "Dark Souls", price: 74.90, isExclusive: true },
  { name: "Game Estampa 32", type: "Hogwarts Legacy", price: 69.90, isExclusive: false },
  { name: "Game Estampa 33", type: "Assassin's Creed", price: 69.90, isExclusive: true },
  { name: "Game Estampa 34", type: "Far Cry", price: 74.90, isExclusive: false },
  { name: "Game Estampa 35", type: "Red Dead", price: 69.90, isExclusive: false },
];

const inclusos = [
  { icon: Users, title: "Nome da Turma", description: "Já incluso no preço base", included: true },
  { icon: Shirt, title: "Número Individual", description: "Já incluso no preço base", included: true },
  { icon: MessageCircle, title: "Logo/Escudo", description: "Já incluso no preço base", included: true },
];

const extras = [
  { icon: Zap, title: "Design Exclusivo", price: "+R$ 30,00" },
];

const faqItems = [
  { question: "Qual o prazo de entrega para camisetas de Personagens?", answer: "O prazo de entrega varia de 7 a 15 dias úteis, dependendo da quantidade e complexidade do pedido." },
  { question: "Qual a quantidade mínima de peças?", answer: "A quantidade mínima é de 10 peças por modelo. Consulte-nos para pedidos menores." },
  { question: "Posso solicitar um personagem específico?", answer: "Sim! Você pode solicitar qualquer personagem e nossa equipe criará o design perfeito para você." },
  { question: "Qual a diferença entre Sublimação e Estampa?", answer: "Sublimação oferece cores mais vibrantes e durabilidade superior, enquanto Estampa é uma opção mais econômica com ótima qualidade." },
];

// Carousel Component for Best Sellers
interface BestSellerItem {
  name: string;
  sales: string;
  price: number;
  isExclusive: boolean;
}

const BestSellersCarousel = ({ items }: { items: BestSellerItem[] }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const scrollPositionRef = useRef(0);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    const speed = 0.8;

    const animate = () => {
      if (!isPaused && scrollContainer) {
        scrollPositionRef.current += speed;
        const maxScroll = scrollContainer.scrollWidth / 2;
        
        if (scrollPositionRef.current >= maxScroll) {
          scrollPositionRef.current = 0;
        }
        
        scrollContainer.scrollLeft = scrollPositionRef.current;
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [isPaused]);

  const duplicatedItems = [...items, ...items];

  return (
    <div
      ref={scrollRef}
      className="flex gap-4 overflow-x-auto scrollbar-hide px-4"
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      {duplicatedItems.map((item, index) => (
        <div 
          key={index} 
          className={`flex-shrink-0 w-44 rounded-xl overflow-hidden shadow-md ${item.isExclusive ? 'border-2 border-amber-400' : 'bg-card'}`}
        >
          <div className="relative bg-secondary aspect-square flex items-center justify-center">
            {item.isExclusive && (
              <span className="absolute top-2 right-2 w-10 h-10 bg-gradient-to-br from-amber-400 via-yellow-500 to-amber-600 rounded-full flex items-center justify-center">
                <Crown className="w-5 h-5 text-black" fill="black" />
              </span>
            )}
            <span className="text-muted-foreground text-sm font-bold">TAQUI</span>
          </div>
          <div className="p-3 bg-card">
            <h3 className="font-extrabold text-foreground text-xs leading-tight mb-1 line-clamp-2">{item.name}</h3>
            <p className="text-muted-foreground text-[10px] mb-1">{item.sales}</p>
            <p className="text-sm font-extrabold text-foreground">R$ {item.price.toFixed(2).replace(".", ",")}</p>
            <button className={`w-full mt-2 py-2 rounded-lg font-bold text-xs transition-colors ${
              item.isExclusive 
                ? "bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 hover:opacity-90 text-white"
                : "bg-primary hover:bg-primary/90 text-primary-foreground"
            }`}>
              Ver Detalhes
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

const Personagens = () => {
  const [tipoSelecionado, setTipoSelecionado] = useState<TipoModelo>("Sublimações");
  const [visiblePop, setVisiblePop] = useState(6);
  const [visibleAnimes, setVisibleAnimes] = useState(6);
  const [visibleGames, setVisibleGames] = useState(6);

  const bestSellers = tipoSelecionado === "Sublimações" ? bestSellersSublimacao : bestSellersEstampa;
  const pop = tipoSelecionado === "Sublimações" ? popSublimacao : popEstampa;
  const animes = tipoSelecionado === "Sublimações" ? animesSublimacao : animesEstampa;
  const games = tipoSelecionado === "Sublimações" ? gamesSublimacao : gamesEstampa;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Banner Image */}
        <div className="w-full aspect-[16/9] bg-gradient-to-br from-[#0038a8] to-[#0059fa] flex items-center justify-center">
          <span className="text-white/30 text-sm font-medium">BANNER_PERSONAGENS</span>
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#0038a8] to-[#0059fa] px-4 pt-8 pb-4">
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <div className="bg-[#1a4fc9]/60 backdrop-blur-sm rounded-full px-5 py-2.5 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-white" />
              <span className="text-white text-sm font-medium">Camisetas de Personagens</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl font-black text-white text-center leading-tight mb-6">
            Camisetas de<br />Personagens
          </h1>

          {/* Description */}
          <p className="text-white/90 text-center text-lg font-medium leading-relaxed mb-8 max-w-md mx-auto">
            Vista seus personagens favoritos! Heróis, animes, games e muito mais com qualidade premium.
          </p>

          {/* Stats */}
          <div className="flex justify-center gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-black text-white italic">{stat.value}</div>
                <div className="text-white/80 text-xs font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        <WaveDivider variant="blue-to-white" />

        {/* Type Selector */}
        <section className="bg-background px-4 py-6">
          <div className="flex justify-center gap-3">
            <button
              onClick={() => setTipoSelecionado("Sublimações")}
              className={`px-6 py-3 rounded-xl font-bold text-sm transition-all ${
                tipoSelecionado === "Sublimações"
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-secondary text-foreground hover:bg-secondary/80"
              }`}
            >
              Sublimações
            </button>
            <button
              onClick={() => setTipoSelecionado("Estampas")}
              className={`px-6 py-3 rounded-xl font-bold text-sm transition-all ${
                tipoSelecionado === "Estampas"
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-secondary text-foreground hover:bg-secondary/80"
              }`}
            >
              Estampas
            </button>
          </div>
        </section>

        {/* Best Sellers Carousel Section */}
        <section className="bg-background py-10 overflow-hidden">
          <div className="px-4">
            <h2 className="text-3xl font-black text-[#2563eb] text-center leading-tight mb-4">
              Modelos Mais<br />Vendidos
            </h2>
            <p className="text-foreground/70 text-center text-base leading-relaxed mb-8 max-w-md mx-auto">
              Confira os personagens que fizeram o maior sucesso entre nossos clientes.
            </p>
          </div>

          <BestSellersCarousel items={bestSellers} />
        </section>

        <WaveDivider variant="white-to-blue" />

        {/* Pop Section */}
        <section className="bg-gradient-to-br from-[#0038a8] to-[#0059fa] px-4 py-10">
          <h2 className="text-3xl font-black text-white text-center leading-tight mb-3">
            Cultura Pop
          </h2>
          <p className="text-white/80 text-center text-base leading-relaxed mb-8 max-w-sm mx-auto">
            Séries, filmes e ícones da cultura pop
          </p>

          <div className="grid grid-cols-2 gap-3 mb-6">
            {pop.slice(0, visiblePop).map((item, index) => (
              <div key={index} className={`rounded-xl overflow-hidden shadow-md ${item.isExclusive ? 'border-2 border-amber-400' : 'bg-card'}`}>
                <div className="relative bg-secondary aspect-square flex items-center justify-center">
                  {item.isExclusive && (
                    <span className="absolute top-2 right-2 w-8 h-8 bg-gradient-to-br from-amber-400 via-yellow-500 to-amber-600 rounded-full flex items-center justify-center">
                      <Crown className="w-4 h-4 text-black" fill="black" />
                    </span>
                  )}
                  <span className="text-muted-foreground text-xs font-bold">TAQUI</span>
                </div>
                <div className="p-3 bg-card">
                  <h3 className="font-extrabold text-foreground text-xs leading-tight mb-1">
                    <span className="line-clamp-1">{item.name} <span className="text-muted-foreground font-normal">• {item.type}</span></span>
                  </h3>
                  <p className="text-sm font-extrabold text-foreground">R$ {item.price.toFixed(2).replace(".", ",")}</p>
                  <button className={`w-full mt-2 py-2 rounded-lg font-bold text-xs transition-colors ${
                    item.isExclusive 
                      ? "bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 hover:opacity-90 text-white"
                      : "bg-primary hover:bg-primary/90 text-primary-foreground"
                  }`}>
                    Ver Detalhes
                  </button>
                </div>
              </div>
            ))}
          </div>

          {visiblePop < pop.length && (
            <button 
              onClick={() => setVisiblePop(prev => Math.min(prev + 6, pop.length))}
              className="w-full bg-white hover:bg-white/95 text-[#1e40af] py-4 px-8 rounded-xl font-bold flex items-center justify-center gap-3 transition-all shadow-lg"
            >
              <span>Ver Mais</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          )}
        </section>

        <WaveDivider variant="blue-to-white" />

        {/* Animes Section */}
        <section className="bg-background px-4 py-10">
          <h2 className="text-3xl font-black text-[#2563eb] text-center leading-tight mb-3">
            Animes
          </h2>
          <p className="text-foreground/70 text-center text-base leading-relaxed mb-8 max-w-sm mx-auto">
            Os melhores animes em camisetas exclusivas
          </p>

          <div className="grid grid-cols-2 gap-3 mb-6">
            {animes.slice(0, visibleAnimes).map((item, index) => (
              <div key={index} className={`rounded-xl overflow-hidden shadow-md ${item.isExclusive ? 'border-2 border-amber-400' : 'bg-card'}`}>
                <div className="relative bg-secondary aspect-square flex items-center justify-center">
                  {item.isExclusive && (
                    <span className="absolute top-2 right-2 w-8 h-8 bg-gradient-to-br from-amber-400 via-yellow-500 to-amber-600 rounded-full flex items-center justify-center">
                      <Crown className="w-4 h-4 text-black" fill="black" />
                    </span>
                  )}
                  <span className="text-muted-foreground text-xs font-bold">TAQUI</span>
                </div>
                <div className="p-3 bg-card">
                  <h3 className="font-extrabold text-foreground text-xs leading-tight mb-1">
                    <span className="line-clamp-1">{item.name} <span className="text-muted-foreground font-normal">• {item.type}</span></span>
                  </h3>
                  <p className="text-sm font-extrabold text-foreground">R$ {item.price.toFixed(2).replace(".", ",")}</p>
                  <button className={`w-full mt-2 py-2 rounded-lg font-bold text-xs transition-colors ${
                    item.isExclusive 
                      ? "bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 hover:opacity-90 text-white"
                      : "bg-primary hover:bg-primary/90 text-primary-foreground"
                  }`}>
                    Ver Detalhes
                  </button>
                </div>
              </div>
            ))}
          </div>

          {visibleAnimes < animes.length && (
            <button 
              onClick={() => setVisibleAnimes(prev => Math.min(prev + 6, animes.length))}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-4 px-8 rounded-xl font-bold flex items-center justify-center gap-3 transition-all shadow-lg"
            >
              <span>Ver Mais</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          )}
        </section>

        <WaveDivider variant="white-to-blue" />

        {/* Games Section */}
        <section className="bg-gradient-to-br from-[#0038a8] to-[#0059fa] px-4 py-10">
          <h2 className="text-3xl font-black text-white text-center leading-tight mb-3">
            Games
          </h2>
          <p className="text-white/80 text-center text-base leading-relaxed mb-8 max-w-sm mx-auto">
            Seus jogos favoritos em camisetas incríveis
          </p>

          <div className="grid grid-cols-2 gap-3 mb-6">
            {games.slice(0, visibleGames).map((item, index) => (
              <div key={index} className={`rounded-xl overflow-hidden shadow-md ${item.isExclusive ? 'border-2 border-amber-400' : 'bg-card'}`}>
                <div className="relative bg-secondary aspect-square flex items-center justify-center">
                  {item.isExclusive && (
                    <span className="absolute top-2 right-2 w-8 h-8 bg-gradient-to-br from-amber-400 via-yellow-500 to-amber-600 rounded-full flex items-center justify-center">
                      <Crown className="w-4 h-4 text-black" fill="black" />
                    </span>
                  )}
                  <span className="text-muted-foreground text-xs font-bold">TAQUI</span>
                </div>
                <div className="p-3 bg-card">
                  <h3 className="font-extrabold text-foreground text-xs leading-tight mb-1">
                    <span className="line-clamp-1">{item.name} <span className="text-muted-foreground font-normal">• {item.type}</span></span>
                  </h3>
                  <p className="text-sm font-extrabold text-foreground">R$ {item.price.toFixed(2).replace(".", ",")}</p>
                  <button className={`w-full mt-2 py-2 rounded-lg font-bold text-xs transition-colors ${
                    item.isExclusive 
                      ? "bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 hover:opacity-90 text-white"
                      : "bg-primary hover:bg-primary/90 text-primary-foreground"
                  }`}>
                    Ver Detalhes
                  </button>
                </div>
              </div>
            ))}
          </div>

          {visibleGames < games.length && (
            <button 
              onClick={() => setVisibleGames(prev => Math.min(prev + 6, games.length))}
              className="w-full bg-white hover:bg-white/95 text-[#1e40af] py-4 px-8 rounded-xl font-bold flex items-center justify-center gap-3 transition-all shadow-lg"
            >
              <span>Ver Mais</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          )}
        </section>

        <WaveDivider variant="blue-to-white" />

        {/* What's Included Section */}
        <section className="bg-background px-4 py-10">
          <h2 className="text-3xl font-black text-[#2563eb] text-center leading-tight mb-8">
            O Que Está<br />Incluso?
          </h2>

          <div className="space-y-3 mb-6">
            {inclusos.map((item, index) => (
              <div key={index} className="bg-card rounded-xl p-4 flex items-center gap-4 shadow-sm border border-border">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
                <span className="text-xs font-bold text-green-600 bg-green-100 px-3 py-1 rounded-full">
                  INCLUSO
                </span>
              </div>
            ))}
          </div>

          {/* Extras */}
          <h3 className="text-xl font-bold text-[#2563eb] text-center mb-4">Extras Opcionais</h3>
          <div className="space-y-3">
            {extras.map((item, index) => (
              <div key={index} className="bg-gradient-to-r from-[#e6f0ff] to-[#cce0ff] rounded-xl p-4 flex items-center gap-4 shadow-sm border border-[#2563eb]">
                <div className="w-12 h-12 rounded-full bg-[#2563eb]/20 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-[#2563eb]" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-[#1e40af]">{item.title}</h3>
                  <p className="text-[#2563eb] text-sm font-medium">{item.price}</p>
                </div>
                <Star className="w-5 h-5 text-[#2563eb]" />
              </div>
            ))}
          </div>
        </section>

        <WaveDivider variant="white-to-blue" />

        {/* FAQ Section */}
        <section className="bg-gradient-to-br from-[#0038a8] to-[#0059fa] px-4 py-10">
          <h2 className="text-3xl font-black text-white text-center leading-tight mb-8">
            Perguntas<br />Frequentes
          </h2>

          <Accordion type="single" collapsible className="space-y-3">
            {faqItems.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white/10 backdrop-blur-sm rounded-xl border-none overflow-hidden"
              >
                <AccordionTrigger className="px-4 py-4 text-white font-bold text-left hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 text-white/80">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        <WaveDivider variant="blue-to-white" />

        {/* CTA Section */}
        <section className="bg-background px-4 py-10">
          <div className="bg-gradient-to-br from-[#0038a8] to-[#0059fa] rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-black text-white mb-4">
              Pronto para criar sua camiseta?
            </h2>
            <p className="text-white/80 mb-6">
              Entre em contato e peça já a sua!
            </p>
            <button className="bg-white text-[#1e40af] px-8 py-4 rounded-xl font-bold flex items-center gap-3 mx-auto hover:bg-white/95 transition-all shadow-lg">
              <MessageCircle className="w-5 h-5" />
              <span>Falar no WhatsApp</span>
            </button>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Personagens;
