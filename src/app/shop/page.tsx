"use client";

import { useState } from "react";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Xia Yang Mine Blue Fluorite Cluster",
    category: "specimens",
    price: 379.0,
    image: "https://i.etsystatic.com/64045303/r/il/363c4f/7768071112/il_fullxfull.7768071112_f22p.jpg",
    etsyUrl: "https://www.etsy.com/shop/DoucetCollectiveCo",
  },
  {
    id: 2,
    name: "Double-Sided Blue Fluorite with Calcite",
    category: "specimens",
    price: 355.0,
    image: "https://i.etsystatic.com/64045303/r/il/fdd4a7/7768005730/il_fullxfull.7768005730_bca7.jpg",
    etsyUrl: "https://www.etsy.com/shop/DoucetCollectiveCo",
  },
  {
    id: 3,
    name: "Sparkling Blue Lace Agate Freeform",
    category: "freeforms",
    price: 115.0,
    image: "https://i.etsystatic.com/64045303/r/il/d225fa/7812472453/il_fullxfull.7812472453_92my.jpg",
    etsyUrl: "https://www.etsy.com/shop/DoucetCollectiveCo",
  },
  {
    id: 4,
    name: "Pink Dyed Sardonyx Tower Set",
    category: "towers",
    price: 60.0,
    image: "https://i.etsystatic.com/64045303/r/il/8e9eaf/7764455362/il_fullxfull.7764455362_c27g.jpg",
    etsyUrl: "https://www.etsy.com/shop/DoucetCollectiveCo",
  },
  {
    id: 5,
    name: "Druzy Sardonyx Crescent Moon",
    category: "carvings",
    price: 69.0,
    image: "https://i.etsystatic.com/64045303/r/il/ef9bb4/7812349069/il_fullxfull.7812349069_kt2z.jpg",
    etsyUrl: "https://www.etsy.com/shop/DoucetCollectiveCo",
  },
  {
    id: 6,
    name: "Stunning Huge Sugar Green Fluorite Specimen",
    category: "specimens",
    price: 350.0,
    image: "https://i.etsystatic.com/64045303/r/il/7430db/7811889119/il_fullxfull.7811889119_phcy.jpg",
    etsyUrl: "https://www.etsy.com/shop/DoucetCollectiveCo",
  },
  {
    id: 7,
    name: "Banded Dream Amethyst Sphere 80mm",
    category: "spheres",
    price: 65.0,
    image: "https://i.etsystatic.com/64045303/r/il/6d9d71/7762491914/il_fullxfull.7762491914_73ir.jpg",
    etsyUrl: "https://www.etsy.com/shop/DoucetCollectiveCo",
  },
  {
    id: 8,
    name: "Large Rhodonite Sphere",
    category: "spheres",
    price: 162.0,
    image: "https://i.etsystatic.com/64045303/r/il/f4a799/7759659470/il_fullxfull.7759659470_djoi.jpg",
    etsyUrl: "https://www.etsy.com/shop/DoucetCollectiveCo",
  },
  {
    id: 9,
    name: "Large Rhyolite Sphere Pink Flower Rhyolite Sakura Jasper Crystal Ball 2.3 lbs Large Polished Stone Orb for Growth & Grounded Heart Energy",
    category: "spheres",
    price: 180.0,
    image: "https://i.etsystatic.com/64045303/r/il/faa9b7/7807517051/il_fullxfull.7807517051_lg9m.jpg",
    etsyUrl: "https://www.etsy.com/shop/DoucetCollectiveCo",
  },
  {
    id: 10,
    name: "Moss Agate Crescent Moon on Stand",
    category: "carvings",
    price: 89.0,
    image: "https://i.etsystatic.com/64045303/r/il/e0ab83/7804600905/il_fullxfull.7804600905_sl70.jpg",
    etsyUrl: "https://www.etsy.com/shop/DoucetCollectiveCo",
  },
  {
    id: 11,
    name: "Ruby Zoisite Crystal Flower Carving with Stand, Heart Chakra Decor, Hand Carved Sculpture, Emotional Healing Crystal, Growth & Renewal Stone",
    category: "carvings",
    price: 65.0,
    image: "https://i.etsystatic.com/64045303/r/il/5f5c67/7603376706/il_fullxfull.7603376706_71l3.jpg",
    etsyUrl: "https://www.etsy.com/shop/DoucetCollectiveCo",
  },
  {
    id: 12,
    name: "Deep Red Carnelian Palm Stones",
    category: "carvings",
    price: 65.0,
    image: "https://i.etsystatic.com/64045303/r/il/ef64af/7737985000/il_fullxfull.7737985000_drfs.jpg",
    etsyUrl: "https://www.etsy.com/shop/DoucetCollectiveCo",
  },
  {
    id: 13,
    name: "Blue and Gold Flash Labradorite Palm Stone",
    category: "carvings",
    price: 35.0,
    image: "https://i.etsystatic.com/64045303/r/il/925c96/7785900959/il_fullxfull.7785900959_35vu.jpg",
    etsyUrl: "https://www.etsy.com/shop/DoucetCollectiveCo",
  },
  {
    id: 14,
    name: "Gold Sheen Obsidian Tower Set, Pair of Gold Sheen Obsidian Points, Crystal Towers, Protective Grounding Stone, Spiritual decor",
    category: "towers",
    price: 36.0,
    image: "https://i.etsystatic.com/64045303/r/il/3aa819/7781521705/il_fullxfull.7781521705_6hrk.jpg",
    etsyUrl: "https://www.etsy.com/shop/DoucetCollectiveCo",
  },
  {
    id: 15,
    name: "Fluorite Floating Cube Set (Set of 3)",
    category: "specimens",
    price: 58.0,
    image: "https://i.etsystatic.com/64045303/r/il/372d42/7781438835/il_fullxfull.7781438835_s5h2.jpg",
    etsyUrl: "https://www.etsy.com/shop/DoucetCollectiveCo",
  },
  {
    id: 16,
    name: "Unique Grape Agate Skull Druzy– Blue Green Botryoidal Agate with Red Pockets",
    category: "skulls",
    price: 110.0,
    image: "https://i.etsystatic.com/64045303/r/il/694fa0/7733442122/il_fullxfull.7733442122_fkiv.jpg",
    etsyUrl: "https://www.etsy.com/shop/DoucetCollectiveCo",
  },
  {
    id: 17,
    name: "Rainbow Flash Labradorite Freeform",
    category: "freeforms",
    price: 69.0,
    image: "https://i.etsystatic.com/64045303/r/il/8a4f5d/7733401128/il_fullxfull.7733401128_r0on.jpg",
    etsyUrl: "https://www.etsy.com/shop/DoucetCollectiveCo",
  },
  {
    id: 18,
    name: "Sunset Labradorite Freeform",
    category: "freeforms",
    price: 65.0,
    image: "https://i.etsystatic.com/64045303/r/il/c0a53a/7781327767/il_fullxfull.7781327767_jssa.jpg",
    etsyUrl: "https://www.etsy.com/shop/DoucetCollectiveCo",
  },
  {
    id: 19,
    name: "Purple Flash Labradorite Palm Stone",
    category: "freeforms",
    price: 45.0,
    image: "https://i.etsystatic.com/64045303/r/il/210871/7732750368/il_fullxfull.7732750368_1gnf.jpg",
    etsyUrl: "https://www.etsy.com/shop/DoucetCollectiveCo",
  },
  {
    id: 20,
    name: "Large Petrified Wood Slab –Polished Fossil",
    category: "specimens",
    price: 165.0,
    image: "https://i.etsystatic.com/64045303/r/il/dbbd09/7780660637/il_fullxfull.7780660637_8l5d.jpg",
    etsyUrl: "https://www.etsy.com/shop/DoucetCollectiveCo",
  },
  {
    id: 21,
    name: "Phoenix Stone Dragon Carving",
    category: "carvings",
    price: 145.0,
    image: "https://i.etsystatic.com/64045303/r/il/bc6440/7767928045/il_fullxfull.7767928045_p62a.jpg",
    etsyUrl: "https://www.etsy.com/shop/DoucetCollectiveCo",
  },
  {
    id: 22,
    name: "Flashy Labradorite Tower Set",
    category: "towers",
    price: 48.0,
    image: "https://i.etsystatic.com/64045303/r/il/9ddfbe/7767796565/il_fullxfull.7767796565_3hkg.jpg",
    etsyUrl: "https://www.etsy.com/shop/DoucetCollectiveCo",
  },
  {
    id: 23,
    name: "Chocolate Sardonyx Tower Set",
    category: "towers",
    price: 60.0,
    image: "https://i.etsystatic.com/64045303/r/il/9a299c/7719844208/il_fullxfull.7719844208_3ke0.jpg",
    etsyUrl: "https://www.etsy.com/shop/DoucetCollectiveCo",
  },
  {
    id: 24,
    name: "Large UV Reactive Volcano Agate Tower",
    category: "towers",
    price: 175.0,
    image: "https://i.etsystatic.com/64045303/r/il/b0e73a/7719733728/il_fullxfull.7719733728_rm8f.jpg",
    etsyUrl: "https://www.etsy.com/shop/DoucetCollectiveCo",
  },
  {
    id: 25,
    name: "Large Sunset Flash Labradorite Freeform",
    category: "freeforms",
    price: 365.0,
    image: "https://i.etsystatic.com/64045303/r/il/9827a8/7767640851/il_fullxfull.7767640851_29ye.jpg",
    etsyUrl: "https://www.etsy.com/shop/DoucetCollectiveCo",
  },
  {
    id: 26,
    name: "Large Gemmy Celestite Geode Egg",
    category: "cathedrals",
    price: 188.0,
    image: "https://i.etsystatic.com/64045303/r/il/9a91eb/7719677982/il_fullxfull.7719677982_jyu4.jpg",
    etsyUrl: "https://www.etsy.com/shop/DoucetCollectiveCo",
  },
  {
    id: 27,
    name: "Moss Agate Tower with Druzy Pocket",
    category: "towers",
    price: 140.0,
    image: "https://i.etsystatic.com/64045303/r/il/f31cdd/7767588097/il_fullxfull.7767588097_11xe.jpg",
    etsyUrl: "https://www.etsy.com/shop/DoucetCollectiveCo",
  },
  {
    id: 28,
    name: "Lepidolite Crescent Moon 5 Inch",
    category: "carvings",
    price: 52.0,
    image: "https://i.etsystatic.com/64045303/r/il/b3a5a9/7719409772/il_fullxfull.7719409772_sa5y.jpg",
    etsyUrl: "https://www.etsy.com/shop/DoucetCollectiveCo",
  },
  {
    id: 29,
    name: "Stunning XL Black Tourmalinated Quartz Sphere, XL Protection Crystal Ball, Tourmaline in Quartz Stone, Grounding & Energy Clearing Decor",
    category: "spheres",
    price: 279.0,
    image: "https://i.etsystatic.com/64045303/r/il/8da4fb/7718776944/il_fullxfull.7718776944_f0qi.jpg",
    etsyUrl: "https://www.etsy.com/shop/DoucetCollectiveCo",
  },
  {
    id: 30,
    name: "Rare Dendritic Honey Calcite Tower",
    category: "towers",
    price: 79.0,
    image: "https://i.etsystatic.com/64045303/r/il/e9a67a/7718701338/il_fullxfull.7718701338_sxwx.jpg",
    etsyUrl: "https://www.etsy.com/shop/DoucetCollectiveCo",
  },
  {
    id: 31,
    name: "Amazonite Crescent Moon Set –Crystal Moon Carvings",
    category: "carvings",
    price: 44.0,
    image: "https://i.etsystatic.com/64045303/r/il/6ee96f/7716864124/il_fullxfull.7716864124_n3hz.jpg",
    etsyUrl: "https://www.etsy.com/shop/DoucetCollectiveCo",
  },
  {
    id: 32,
    name: "Pink Opal Crescent Moon",
    category: "carvings",
    price: 28.0,
    image: "https://i.etsystatic.com/64045303/r/il/340174/7716830098/il_fullxfull.7716830098_53dp.jpg",
    etsyUrl: "https://www.etsy.com/shop/DoucetCollectiveCo",
  },
  {
    id: 33,
    name: "Golden Mica Moon Set",
    category: "carvings",
    price: 42.0,
    image: "https://i.etsystatic.com/64045303/r/il/392fa2/7764738797/il_fullxfull.7764738797_jjnu.jpg",
    etsyUrl: "https://www.etsy.com/shop/DoucetCollectiveCo",
  },
  {
    id: 34,
    name: "Black Sardonyx Tower 7 Inch",
    category: "towers",
    price: 54.97,
    image: "https://i.etsystatic.com/64045303/r/il/48ccfa/7764674043/il_fullxfull.7764674043_3smm.jpg",
    etsyUrl: "https://www.etsy.com/shop/DoucetCollectiveCo",
  },
  {
    id: 35,
    name: "Extra Large Serpentine Tower –Polished Serpentine Obelisk, 6 Point Crystal Generator, 5 lb Statement Stone for Protection & Kundalini Energy",
    category: "towers",
    price: 229.0,
    image: "https://i.etsystatic.com/64045303/r/il/bd507b/7764574615/il_fullxfull.7764574615_qa6p.jpg",
    etsyUrl: "https://www.etsy.com/shop/DoucetCollectiveCo",
  },
  {
    id: 36,
    name: "UV Reactive Lapis Lazuli Heart on Stand 4x6",
    category: "carvings",
    price: 55.0,
    image: "https://i.etsystatic.com/64045303/r/il/1bd6b2/7715626542/il_fullxfull.7715626542_162o.jpg",
    etsyUrl: "https://www.etsy.com/shop/DoucetCollectiveCo",
  },
  {
    id: 37,
    name: "Smoky Quartz Cluster 6\\",
    category: "specimens",
    price: 74.0,
    image: "https://i.etsystatic.com/64045303/r/il/0bb9cf/7763444767/il_fullxfull.7763444767_e5in.jpg",
    etsyUrl: "https://www.etsy.com/shop/DoucetCollectiveCo",
  },
  {
    id: 38,
    name: "XL Natural Clear Quartz Cluster 13.5\\",
    category: "specimens",
    price: 429.0,
    image: "https://i.etsystatic.com/64045303/r/il/a917bb/7761719281/il_fullxfull.7761719281_elv9.jpg",
    etsyUrl: "https://www.etsy.com/shop/DoucetCollectiveCo",
  },
  {
    id: 39,
    name: "Large Garden Quartz on Stand",
    category: "specimens",
    price: 700.0,
    image: "https://i.etsystatic.com/64045303/r/il/3d45c3/7713749704/il_fullxfull.7713749704_is55.jpg",
    etsyUrl: "https://www.etsy.com/shop/DoucetCollectiveCo",
  },
  {
    id: 40,
    name: "XXL Citrine Cathedral with Rutile Inclusions & Calcite Golden Rutile Quartz Statement Crystal",
    category: "cathedrals",
    price: 1789.0,
    image: "https://i.etsystatic.com/64045303/r/il/784930/7713714972/il_fullxfull.7713714972_jr4l.jpg",
    etsyUrl: "https://www.etsy.com/shop/DoucetCollectiveCo",
  },
  {
    id: 41,
    name: "Large Volcano Agate Skull 6x5",
    category: "skulls",
    price: 265.0,
    image: "https://i.etsystatic.com/64045303/r/il/dfe68a/7761579651/il_fullxfull.7761579651_7h4h.jpg",
    etsyUrl: "https://www.etsy.com/shop/DoucetCollectiveCo",
  },
  {
    id: 42,
    name: "Purple Fluorite 9 Tail Fox Carving 7.25”, Large Fluorite Crystal Animal Statue, Spiritual Home Decor, Collector Display Piece",
    category: "carvings",
    price: 160.0,
    image: "https://i.etsystatic.com/64045303/r/il/e4d5a1/7710628968/il_fullxfull.7710628968_bh81.jpg",
    etsyUrl: "https://www.etsy.com/shop/DoucetCollectiveCo",
  },
  {
    id: 43,
    name: "Sardonyx Unicorn Carving, 5in Banded Sardonyx Crystal Unicorn, Orange Brown Cream Stone, Protective Grounding Crystal Decor, Collector Gift",
    category: "carvings",
    price: 85.0,
    image: "https://i.etsystatic.com/64045303/r/il/fd10e4/7710604136/il_fullxfull.7710604136_linw.jpg",
    etsyUrl: "https://www.etsy.com/shop/DoucetCollectiveCo",
  },
  {
    id: 44,
    name: "Large Double Terminated Clear Quartz Crystal with Rainbow Inclusions, Natural Clear Quartz Point, Energy Amplifier Stone, Meditation Decor",
    category: "specimens",
    price: 70.0,
    image: "https://i.etsystatic.com/64045303/r/il/8f5652/7710242802/il_fullxfull.7710242802_2ida.jpg",
    etsyUrl: "https://www.etsy.com/shop/DoucetCollectiveCo",
  },
  {
    id: 45,
    name: "Large Volcano Agate Wand",
    category: "wands",
    price: 98.0,
    image: "https://i.etsystatic.com/64045303/r/il/40746d/7758111871/il_fullxfull.7758111871_ei1c.jpg",
    etsyUrl: "https://www.etsy.com/shop/DoucetCollectiveCo",
  },
  {
    id: 46,
    name: "Gorgeous Rose Calcite 6 Point Tower",
    category: "towers",
    price: 76.0,
    image: "https://i.etsystatic.com/64045303/r/il/50a5a5/7758119257/il_fullxfull.7758119257_8kib.jpg",
    etsyUrl: "https://www.etsy.com/shop/DoucetCollectiveCo",
  },
  {
    id: 47,
    name: "Septarian Crystal Bowl, Polished Septarian Nodule Dish, Dragon Stone Bowl, Grounding Protection Crystal Decor, Earthy Home Altar Piece",
    category: "carvings",
    price: 100.0,
    image: "https://i.etsystatic.com/64045303/r/il/3a55d9/7710179800/il_fullxfull.7710179800_nb9l.jpg",
    etsyUrl: "https://www.etsy.com/shop/DoucetCollectiveCo",
  },
  {
    id: 48,
    name: "Mystery Crystal Confetti Scoop, Mixed Tumbled and Rough Gemstones, Surprise Crystal Bag for Collectors, Altar & Meditation Crystal Grab Bag",
    category: "mystery",
    price: 11.95,
    image: "https://i.etsystatic.com/64045303/r/il/bfd1c9/7704759314/il_fullxfull.7704759314_6xbv.jpg",
    etsyUrl: "https://www.etsy.com/shop/DoucetCollectiveCo",
  },
  {
    id: 49,
    name: "Large Ocean Jasper Skull 6 lbs- Carved Ocean Jasper",
    category: "skulls",
    price: 329.0,
    image: "https://i.etsystatic.com/64045303/r/il/15ae6c/7697763816/il_fullxfull.7697763816_diik.jpg",
    etsyUrl: "https://www.etsy.com/shop/DoucetCollectiveCo",
  },
  {
    id: 50,
    name: "Polychrome Jasper Flame Pair 4.5 Inch",
    category: "carvings",
    price: 68.0,
    image: "https://i.etsystatic.com/64045303/r/il/6c1b81/7745573901/il_fullxfull.7745573901_3x95.jpg",
    etsyUrl: "https://www.etsy.com/shop/DoucetCollectiveCo",
  },
  {
    id: 51,
    name: "Flashy Labradorite 4 Point Tower",
    category: "towers",
    price: 46.0,
    image: "https://i.etsystatic.com/64045303/r/il/fbaf0a/7694204716/il_fullxfull.7694204716_iztd.jpg",
    etsyUrl: "https://www.etsy.com/shop/DoucetCollectiveCo",
  },
  {
    id: 52,
    name: "XL Caribbean Calcite Tower 14 Inch",
    category: "towers",
    price: 215.0,
    image: "https://i.etsystatic.com/64045303/r/il/8e5796/7687066450/il_fullxfull.7687066450_o7xj.jpg",
    etsyUrl: "https://www.etsy.com/shop/DoucetCollectiveCo",
  },
  {
    id: 53,
    name: "Ghostly Mangano Calcite Skull • UV Reactive Crystal Skull • Soft Pink Calcite Carving • One-of-a-Kind Spiritual Decor Piece",
    category: "skulls",
    price: 105.0,
    image: "https://i.etsystatic.com/64045303/r/il/845058/7687022266/il_fullxfull.7687022266_n8m5.jpg",
    etsyUrl: "https://www.etsy.com/shop/DoucetCollectiveCo",
  },
  {
    id: 54,
    name: "Green Serpentine Crystal Skull • Hand-Carved Serpentine Stone Skull • Earthy Green Crystal Carving • One-of-a-Kind Spiritual Decor",
    category: "skulls",
    price: 55.0,
    image: "https://i.etsystatic.com/64045303/r/il/a6a869/7686894352/il_fullxfull.7686894352_ea3j.jpg",
    etsyUrl: "https://www.etsy.com/shop/DoucetCollectiveCo",
  },
  {
    id: 55,
    name: "Green Aventurine Skull Crystal • Hand-Carved Aventurine Skull • Natural Green Stone Carving • One-of-a-Kind Spiritual Decor Piece",
    category: "skulls",
    price: 60.0,
    image: "https://i.etsystatic.com/64045303/r/il/9115fd/7734772969/il_fullxfull.7734772969_past.jpg",
    etsyUrl: "https://www.etsy.com/shop/DoucetCollectiveCo",
  },
  {
    id: 56,
    name: "Caribbean Calcite Skull Carving • Blue & Cream Calcite Crystal Skull • One-of-a-Kind Ocean-Toned Statement Decor • Spiritual Home Accent",
    category: "skulls",
    price: 50.0,
    image: "https://i.etsystatic.com/64045303/r/il/bf9fb7/7732612029/il_fullxfull.7732612029_ri65.jpg",
    etsyUrl: "https://www.etsy.com/shop/DoucetCollectiveCo",
  },
  {
    id: 57,
    name: "Pink Mangano Calcite Sphere 71mm",
    category: "spheres",
    price: 45.0,
    image: "https://i.etsystatic.com/64045303/r/il/2b1876/7681209158/il_fullxfull.7681209158_gq4g.jpg",
    etsyUrl: "https://www.etsy.com/shop/DoucetCollectiveCo",
  },
  {
    id: 58,
    name: "Peach Moonstone Sphere Blue Flash",
    category: "spheres",
    price: 50.0,
    image: "https://i.etsystatic.com/64045303/r/il/2bab5a/7676717182/il_fullxfull.7676717182_3qde.jpg",
    etsyUrl: "https://www.etsy.com/shop/DoucetCollectiveCo",
  },
  {
    id: 59,
    name: "XL Petrified Wood Sphere 115mm",
    category: "spheres",
    price: 135.0,
    image: "https://i.etsystatic.com/64045303/r/il/959da3/7673573700/il_fullxfull.7673573700_3ooy.jpg",
    etsyUrl: "https://www.etsy.com/shop/DoucetCollectiveCo",
  },
  {
    id: 60,
    name: "Large Rainbow Fluorite Sphere • Large Fluorite Crystal Ball • Natural Green Purple Fluorite • One-of-a-Kind Statement Crystal Decor",
    category: "spheres",
    price: 115.0,
    image: "https://i.etsystatic.com/64045303/r/il/e68940/7673509940/il_fullxfull.7673509940_lz3p.jpg",
    etsyUrl: "https://www.etsy.com/shop/DoucetCollectiveCo",
  },
  {
    id: 61,
    name: "Large Amethyst Cluster Statement Piece • Natural Purple Amethyst Crystal • One-of-a-Kind Raw Geode • Crystal Display for Home & Meditation",
    category: "cathedrals",
    price: 799.0,
    image: "https://i.etsystatic.com/64045303/r/il/a8b90b/7721263205/il_fullxfull.7721263205_708n.jpg",
    etsyUrl: "https://www.etsy.com/shop/DoucetCollectiveCo",
  },
  {
    id: 62,
    name: "Large Rose Quartz Egg",
    category: "carvings",
    price: 72.0,
    image: "https://i.etsystatic.com/64045303/r/il/840306/7721016087/il_fullxfull.7721016087_8gp3.jpg",
    etsyUrl: "https://www.etsy.com/shop/DoucetCollectiveCo",
  },
  {
    id: 63,
    name: "Honeycomb Ruby Heart",
    category: "carvings",
    price: 68.0,
    image: "https://i.etsystatic.com/64045303/r/il/459731/7666535486/il_fullxfull.7666535486_73nl.jpg",
    etsyUrl: "https://www.etsy.com/shop/DoucetCollectiveCo",
  },
  {
    id: 64,
    name: "Large Rainbow Fluorite Tower • 6-Point Fluorite Crystal Obelisk • Natural Green Purple Fluorite • One-of-a-Kind Statement Crystal Decor",
    category: "towers",
    price: 195.0,
    image: "https://i.etsystatic.com/64045303/r/il/6e85b1/7662835090/il_fullxfull.7662835090_caon.jpg",
    etsyUrl: "https://www.etsy.com/shop/DoucetCollectiveCo",
  },
  {
    id: 65,
    name: "6 Inch Yooperlite Teddy Bear Carving",
    category: "carvings",
    price: 68.0,
    image: "https://i.etsystatic.com/64045303/r/il/286ab2/7660316778/il_fullxfull.7660316778_946s.jpg",
    etsyUrl: "https://www.etsy.com/shop/DoucetCollectiveCo",
  },
  {
    id: 66,
    name: "3 Point Garden Quartz Freeform",
    category: "freeforms",
    price: 120.0,
    image: "https://i.etsystatic.com/64045303/r/il/972a87/7708205111/il_fullxfull.7708205111_49rz.jpg",
    etsyUrl: "https://www.etsy.com/shop/DoucetCollectiveCo",
  },
  {
    id: 67,
    name: "Personalized Crystal Curation Experience",
    category: "specimens",
    price: 50.0,
    image: "https://i.etsystatic.com/64045303/r/il/eced03/7656990802/il_fullxfull.7656990802_jwjx.jpg",
    etsyUrl: "https://www.etsy.com/shop/DoucetCollectiveCo",
  },
  {
    id: 68,
    name: "Mahogany Obsidian Sphere 68mm Polished Crystal Ball",
    category: "spheres",
    price: 68.0,
    image: "https://i.etsystatic.com/64045303/r/il/dfbd7f/7677633854/il_fullxfull.7677633854_2iyr.jpg",
    etsyUrl: "https://www.etsy.com/shop/DoucetCollectiveCo",
  },
  {
    id: 69,
    name: "Fire Quartz Sphere",
    category: "spheres",
    price: 50.0,
    image: "https://i.etsystatic.com/64045303/r/il/6108d4/7677673820/il_fullxfull.7677673820_j7r3.jpg",
    etsyUrl: "https://www.etsy.com/shop/DoucetCollectiveCo",
  },
  {
    id: 70,
    name: "Volcano Agate Sphere",
    category: "spheres",
    price: 50.0,
    image: "https://i.etsystatic.com/64045303/r/il/944790/7728485151/il_fullxfull.7728485151_trbl.jpg",
    etsyUrl: "https://www.etsy.com/shop/DoucetCollectiveCo",
  },
  {
    id: 71,
    name: "Green Aqua Quartz Cluster",
    category: "carvings",
    price: 22.0,
    image: "https://i.etsystatic.com/64045303/r/il/13cae5/7702996097/il_fullxfull.7702996097_fdsd.jpg",
    etsyUrl: "https://www.etsy.com/shop/DoucetCollectiveCo",
  },
  {
    id: 72,
    name: "Aqua Quartz Specimen",
    category: "specimens",
    price: 22.0,
    image: "https://i.etsystatic.com/64045303/r/il/a732f4/7702947257/il_fullxfull.7702947257_58g8.jpg",
    etsyUrl: "https://www.etsy.com/shop/DoucetCollectiveCo",
  },
  {
    id: 73,
    name: "Aqua Quartz Specimen",
    category: "specimens",
    price: 22.0,
    image: "https://i.etsystatic.com/64045303/r/il/949249/7653354648/il_fullxfull.7653354648_dc15.jpg",
    etsyUrl: "https://www.etsy.com/shop/DoucetCollectiveCo",
  },
  {
    id: 74,
    name: "Black Amethyst Cluster",
    category: "specimens",
    price: 75.0,
    image: "https://i.etsystatic.com/64045303/r/il/a69250/7656631278/il_fullxfull.7656631278_e22z.jpg",
    etsyUrl: "https://www.etsy.com/shop/DoucetCollectiveCo",
  },
  {
    id: 75,
    name: "Dream Amethyst Tower 9 Inch",
    category: "towers",
    price: 105.0,
    image: "https://i.etsystatic.com/64045303/r/il/93426a/7679645381/il_fullxfull.7679645381_oyyx.jpg",
    etsyUrl: "https://www.etsy.com/shop/DoucetCollectiveCo",
  },
  {
    id: 76,
    name: "Dream Amethyst Tower",
    category: "towers",
    price: 189.0,
    image: "https://i.etsystatic.com/64045303/r/il/807712/7679425875/il_fullxfull.7679425875_q4mp.jpg",
    etsyUrl: "https://www.etsy.com/shop/DoucetCollectiveCo",
  },
  {
    id: 77,
    name: "Chrysanthemum Stone Crystal Skull",
    category: "skulls",
    price: 89.0,
    image: "https://i.etsystatic.com/64045303/r/il/53664a/7673847141/il_fullxfull.7673847141_bmax.jpg",
    etsyUrl: "https://www.etsy.com/shop/DoucetCollectiveCo",
  },
  {
    id: 78,
    name: "Chrysanthemum Stone Crystal Skull",
    category: "skulls",
    price: 98.0,
    image: "https://i.etsystatic.com/64045303/r/il/c0ce25/7673663193/il_fullxfull.7673663193_dubu.jpg",
    etsyUrl: "https://www.etsy.com/shop/DoucetCollectiveCo",
  },
  {
    id: 79,
    name: "Large Celestite Druzy Geode Cave",
    category: "cathedrals",
    price: 115.0,
    image: "https://i.etsystatic.com/64045303/r/il/a37356/7704656683/il_fullxfull.7704656683_3i0y.jpg",
    etsyUrl: "https://www.etsy.com/shop/DoucetCollectiveCo",
  },
  {
    id: 80,
    name: "Blue Celestite Druzy Heart",
    category: "carvings",
    price: 55.0,
    image: "https://i.etsystatic.com/64045303/r/il/144dfc/7625677014/il_fullxfull.7625677014_h4t0.jpg",
    etsyUrl: "https://www.etsy.com/shop/DoucetCollectiveCo",
  },
  {
    id: 81,
    name: "Polished Mookaite Jasper Dinosaur Carving",
    category: "carvings",
    price: 229.0,
    image: "https://i.etsystatic.com/64045303/r/il/84d04e/7674005289/il_fullxfull.7674005289_7ej9.jpg",
    etsyUrl: "https://www.etsy.com/shop/DoucetCollectiveCo",
  },
  {
    id: 82,
    name: "African Bloodstone Wand",
    category: "wands",
    price: 45.0,
    image: "https://i.etsystatic.com/64045303/r/il/3cef00/7707874006/il_fullxfull.7707874006_i2sa.jpg",
    etsyUrl: "https://www.etsy.com/shop/DoucetCollectiveCo",
  },
  {
    id: 83,
    name: "Amethyst Goddess Carving",
    category: "carvings",
    price: 65.0,
    image: "https://i.etsystatic.com/64045303/r/il/e19379/7654586367/il_fullxfull.7654586367_btby.jpg",
    etsyUrl: "https://www.etsy.com/shop/DoucetCollectiveCo",
  },
  {
    id: 84,
    name: "Raw Himalayan Clear Quartz Cluster",
    category: "specimens",
    price: 295.0,
    image: "https://i.etsystatic.com/64045303/r/il/714680/7608789240/il_fullxfull.7608789240_85yw.jpg",
    etsyUrl: "https://www.etsy.com/shop/DoucetCollectiveCo",
  },
  {
    id: 85,
    name: "Personalized Crystal Mystery Box",
    category: "mystery",
    price: 75.0,
    image: "https://i.etsystatic.com/64045303/r/il/8352be/7654474327/il_fullxfull.7654474327_pmvb.jpg",
    etsyUrl: "https://www.etsy.com/shop/DoucetCollectiveCo",
  },
  {
    id: 86,
    name: "Druzy Agate Nine Tail Fox Carving, Crystal Fox Figurine, Fantasy Animal Decor, Sparkly Druzy Agate Statue, Spiritual Gift, Collector Piece",
    category: "carvings",
    price: 269.89,
    image: "https://i.etsystatic.com/64045303/r/il/7fbcf2/7650865337/il_fullxfull.7650865337_q6ou.jpg",
    etsyUrl: "https://www.etsy.com/shop/DoucetCollectiveCo",
  },
  {
    id: 87,
    name: "Aura Sphalerite Floating Cube",
    category: "specimens",
    price: 78.0,
    image: "https://i.etsystatic.com/64045303/r/il/8753ea/7650790203/il_fullxfull.7650790203_jagi.jpg",
    etsyUrl: "https://www.etsy.com/shop/DoucetCollectiveCo",
  },
  {
    id: 88,
    name: "Cotton Candy Jasper Dragon Carving",
    category: "carvings",
    price: 475.0,
    image: "https://i.etsystatic.com/64045303/r/il/cc5441/7602782138/il_fullxfull.7602782138_ckpa.jpg",
    etsyUrl: "https://www.etsy.com/shop/DoucetCollectiveCo",
  },
  {
    id: 89,
    name: "Green & Purple Fluorite Swan",
    category: "carvings",
    price: 22.0,
    image: "https://i.etsystatic.com/64045303/r/il/e6aa9d/7647896861/il_fullxfull.7647896861_3wid.jpg",
    etsyUrl: "https://www.etsy.com/shop/DoucetCollectiveCo",
  },
  {
    id: 90,
    name: "Green Fluorite Octopus Carving",
    category: "carvings",
    price: 24.0,
    image: "https://i.etsystatic.com/64045303/r/il/aeb2ba/7647828137/il_fullxfull.7647828137_ld9n.jpg",
    etsyUrl: "https://www.etsy.com/shop/DoucetCollectiveCo",
  },
  {
    id: 91,
    name: "Large Snowflake Angelite Tower",
    category: "towers",
    price: 299.0,
    image: "https://i.etsystatic.com/64045303/r/il/04f615/7662893062/il_fullxfull.7662893062_m0om.jpg",
    etsyUrl: "https://www.etsy.com/shop/DoucetCollectiveCo",
  },
  {
    id: 92,
    name: "Blue Flash Labradorite",
    category: "freeforms",
    price: 189.0,
    image: "https://i.etsystatic.com/64045303/r/il/beee51/7598240904/il_fullxfull.7598240904_gasr.jpg",
    etsyUrl: "https://www.etsy.com/shop/DoucetCollectiveCo",
  },
  {
    id: 93,
    name: "Druzy Moss Agate Tower",
    category: "towers",
    price: 120.0,
    image: "https://i.etsystatic.com/64045303/r/il/f9c7df/7646166635/il_fullxfull.7646166635_hoes.jpg",
    etsyUrl: "https://www.etsy.com/shop/DoucetCollectiveCo",
  },
  {
    id: 94,
    name: "Polished Sardonyx Crystal Towers",
    category: "towers",
    price: 28.0,
    image: "https://i.etsystatic.com/64045303/r/il/8387d6/7598189420/il_fullxfull.7598189420_itdl.jpg",
    etsyUrl: "https://www.etsy.com/shop/DoucetCollectiveCo",
  },
  {
    id: 95,
    name: "Blue Apatite Crystal Wand",
    category: "wands",
    price: 39.89,
    image: "https://i.etsystatic.com/64045303/r/il/e42995/7646117219/il_fullxfull.7646117219_ej7a.jpg",
    etsyUrl: "https://www.etsy.com/shop/DoucetCollectiveCo",
  },
  {
    id: 96,
    name: "Lavender Moon Quartz Crystal on Stand",
    category: "specimens",
    price: 63.69,
    image: "https://i.etsystatic.com/64045303/r/il/0830cb/7598148774/il_fullxfull.7598148774_k0uw.jpg",
    etsyUrl: "https://www.etsy.com/shop/DoucetCollectiveCo",
  },
  {
    id: 97,
    name: "Polished Carnelian Sphere",
    category: "spheres",
    price: 25.0,
    image: "https://i.etsystatic.com/64045303/r/il/dbbcdd/7598119924/il_fullxfull.7598119924_pj8e.jpg",
    etsyUrl: "https://www.etsy.com/shop/DoucetCollectiveCo",
  },
  {
    id: 98,
    name: "Polished Volcano Agate Teardrop",
    category: "specimens",
    price: 39.77,
    image: "https://i.etsystatic.com/64045303/r/il/fa8e31/7598107574/il_fullxfull.7598107574_6mmr.jpg",
    etsyUrl: "https://www.etsy.com/shop/DoucetCollectiveCo",
  },
  {
    id: 99,
    name: "Chrysocolla Crystal with Malachite",
    category: "specimens",
    price: 264.0,
    image: "https://i.etsystatic.com/64045303/r/il/dea960/7710876007/il_fullxfull.7710876007_lejm.jpg",
    etsyUrl: "https://www.etsy.com/shop/DoucetCollectiveCo",
  },
  {
    id: 100,
    name: "Raw Green Opal Pair",
    category: "carvings",
    price: 42.49,
    image: "https://i.etsystatic.com/64045303/r/il/7cc664/7598081878/il_fullxfull.7598081878_jgxo.jpg",
    etsyUrl: "https://www.etsy.com/shop/DoucetCollectiveCo",
  },
  {
    id: 101,
    name: "Aura Sphalerite Druzy Egg",
    category: "carvings",
    price: 45.0,
    image: "https://i.etsystatic.com/64045303/r/il/c8a156/7598067522/il_fullxfull.7598067522_9euo.jpg",
    etsyUrl: "https://www.etsy.com/shop/DoucetCollectiveCo",
  },
  {
    id: 102,
    name: "Septarian Druzy Egg 5 inches",
    category: "carvings",
    price: 89.97,
    image: "https://i.etsystatic.com/64045303/r/il/5b041f/7598051112/il_fullxfull.7598051112_ahca.jpg",
    etsyUrl: "https://www.etsy.com/shop/DoucetCollectiveCo",
  },
  {
    id: 103,
    name: "Polished Mango Fluorite Flame Pair",
    category: "carvings",
    price: 26.78,
    image: "https://i.etsystatic.com/64045303/r/il/247034/7645979559/il_fullxfull.7645979559_niyu.jpg",
    etsyUrl: "https://www.etsy.com/shop/DoucetCollectiveCo",
  },
  {
    id: 104,
    name: "Polished Citrine Tower",
    category: "towers",
    price: 65.49,
    image: "https://i.etsystatic.com/64045303/r/il/cc7d6d/7598023928/il_fullxfull.7598023928_78sl.jpg",
    etsyUrl: "https://www.etsy.com/shop/DoucetCollectiveCo",
  },
  {
    id: 105,
    name: "Polished Rose Quartz Crystal Tower",
    category: "towers",
    price: 68.97,
    image: "https://i.etsystatic.com/64045303/r/il/0ca73d/7645950813/il_fullxfull.7645950813_qz7l.jpg",
    etsyUrl: "https://www.etsy.com/shop/DoucetCollectiveCo",
  },
  {
    id: 106,
    name: "Polished Blue Apatite Sphere",
    category: "spheres",
    price: 37.39,
    image: "https://i.etsystatic.com/64045303/r/il/b47eee/7597972610/il_fullxfull.7597972610_r6mz.jpg",
    etsyUrl: "https://www.etsy.com/shop/DoucetCollectiveCo",
  },
  {
    id: 107,
    name: "Polished Rose Quartz Sphere",
    category: "spheres",
    price: 54.97,
    image: "https://i.etsystatic.com/64045303/r/il/8bb2db/7645893051/il_fullxfull.7645893051_f6ww.jpg",
    etsyUrl: "https://www.etsy.com/shop/DoucetCollectiveCo",
  },
  {
    id: 108,
    name: "Fossil Jasper Sphere",
    category: "spheres",
    price: 31.89,
    image: "https://i.etsystatic.com/64045303/r/il/f491f9/7597929426/il_fullxfull.7597929426_mis9.jpg",
    etsyUrl: "https://www.etsy.com/shop/DoucetCollectiveCo",
  },
];

const categories = [
  "all",
  "spheres",
  "towers",
  "carvings",
  "specimens",
  "cathedrals",
  "freeforms",
  "skulls",
  "wands",
  "mystery",
];

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [sortBy, setSortBy] = useState("newest");

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price;
    if (sortBy === "price-high") return b.price - a.price;
    return 0;
  });

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Navigation */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-[#0a0a0a]/70 backdrop-blur-md border border-white/5 rounded-full px-8 py-3 flex items-center gap-10">
        <Link href="/" className="font-display text-lg tracking-[0.35em] uppercase text-[#c9a96e]">
          Doucet Collective
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link href="/shop" className="text-sm tracking-[0.2em] uppercase text-[#c9a96e] transition-colors duration-300">
            Shop
          </Link>
          <Link href="/about" className="text-sm tracking-[0.2em] uppercase text-white/60 hover:text-[#c9a96e] transition-colors duration-300">
            About
          </Link>
          <Link href="/contact" className="text-sm tracking-[0.2em] uppercase text-white/60 hover:text-[#c9a96e] transition-colors duration-300">
            Contact
          </Link>
        </div>
      </nav>

      {/* Page Header */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-4">
            <span className="text-xs tracking-[0.4em] uppercase text-[#c9a96e]/50 block mb-4">Browse</span>
            <h1 className="font-display text-4xl md:text-6xl tracking-[0.1em] uppercase text-white/90">
              The Collection
            </h1>
            <p className="mt-4 text-white/30 text-sm max-w-lg mx-auto">
              Each piece is one-of-a-kind, hand-selected for its unique beauty and energy.
            </p>
          </div>
        </div>
      </section>

      {/* Filters & Sort */}
      <section className="px-6 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 text-xs tracking-[0.2em] uppercase border transition-all duration-300 ${
                  activeCategory === category
                    ? "border-[#c9a96e] text-[#c9a96e] bg-[#c9a96e]/5"
                    : "border-white/10 text-white/40 hover:border-white/20 hover:text-white/60"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="flex items-center justify-between border-b border-white/5 pb-4">
            <span className="text-xs text-white/30 tracking-wider">
              {sortedProducts.length} {sortedProducts.length === 1 ? "piece" : "pieces"}
            </span>
            <div className="flex items-center gap-2">
              <span className="text-xs text-white/30 tracking-wider">Sort by</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-transparent text-xs text-white/50 tracking-wider border border-white/10 px-3 py-1.5 focus:outline-none focus:border-[#c9a96e]/30 cursor-pointer"
              >
                <option value="newest" className="bg-[#0a0a0a]">Newest</option>
                <option value="price-low" className="bg-[#0a0a0a]">Price: Low to High</option>
                <option value="price-high" className="bg-[#0a0a0a]">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="px-6 pb-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sortedProducts.map((product) => (
              <a
                key={product.id}
                href={product.etsyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="aspect-square bg-white/[0.03] border border-white/5 group-hover:border-[#c9a96e]/20 transition-all duration-500 overflow-hidden relative">
                  {product.image ? (
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center">
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-white/10 mb-2">
                        <path d="M12 2L2 7L12 12L22 7L12 2Z" />
                        <path d="M2 17L12 22L22 17" />
                        <path d="M2 12L12 17L22 12" />
                      </svg>
                      <span className="text-[10px] text-white/15 tracking-widest uppercase">Photo coming soon</span>
                    </div>
                  )}

                  <div className="absolute inset-0 bg-[#0a0a0a]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <span className="text-xs tracking-[0.25em] uppercase text-white/80 border border-white/30 px-6 py-2">
                      View on Etsy
                    </span>
                  </div>
                </div>

                <div className="mt-4">
                  <h3 className="text-sm text-white/70 group-hover:text-white/90 transition-colors duration-300 leading-snug">
                    {product.name}
                  </h3>
                  <div className="mt-2 flex items-center gap-3">
                    <span className="text-[#c9a96e] text-sm font-medium">
                      ${product.price.toFixed(2)}
                    </span>
                  </div>
                  <span className="text-[10px] text-white/20 tracking-widest uppercase mt-1 block">
                    {product.category}
                  </span>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-20 text-center border-t border-white/5 pt-16">
            <p className="text-white/30 text-sm mb-6">Browse our full collection on Etsy</p>
            <a
              href="https://www.etsy.com/shop/DoucetCollectiveCo"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center gap-2 px-10 py-4 text-sm tracking-[0.25em] uppercase overflow-hidden border border-[#c9a96e] text-[#c9a96e] hover:text-[#0a0a0a] transition-colors duration-500"
            >
              <span className="absolute inset-0 bg-[#c9a96e] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              <span className="relative">Shop on Etsy</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="relative">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="font-display text-lg tracking-[0.3em] uppercase text-[#c9a96e] mb-4">Doucet Collective</h3>
              <p className="text-white/25 text-sm leading-relaxed">Curated crystals and rare minerals for the discerning collector.</p>
            </div>
            <div>
              <h4 className="text-xs tracking-[0.3em] uppercase text-white/40 mb-4">Navigate</h4>
              <div className="flex flex-col gap-2">
                <Link href="/shop" className="text-sm text-white/25 hover:text-[#c9a96e] transition-colors duration-300">Shop</Link>
                <Link href="/about" className="text-sm text-white/25 hover:text-[#c9a96e] transition-colors duration-300">About</Link>
                <Link href="/contact" className="text-sm text-white/25 hover:text-[#c9a96e] transition-colors duration-300">Contact</Link>
              </div>
            </div>
            <div>
              <h4 className="text-xs tracking-[0.3em] uppercase text-white/40 mb-4">Connect</h4>
              <div className="flex flex-col gap-2">
                <a href="https://www.etsy.com/shop/DoucetCollectiveCo" target="_blank" rel="noopener noreferrer" className="text-sm text-white/25 hover:text-[#c9a96e] transition-colors duration-300">Etsy</a>
              </div>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-white/5 text-center">
            <p className="text-white/15 text-xs tracking-widest">© {new Date().getFullYear()} Doucet Collective. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
