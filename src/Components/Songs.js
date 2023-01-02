const Songs = [

  {
    id: 1,
    favourite: false,
    songName: "Kaala jaadu",
    artist: "El Profesor",
    song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-1d986.appspot.com/o/music%2F01%20-%20Kaala%20Jaadu%20(128%20Kbps).mp3?alt=media&token=c62ecbca-f94c-492c-be1e-1a776ce9190b",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/spotify-clone-1d986.appspot.com/o/image%2F64327_4homeboy.jpg?alt=media&token=fb51a71e-9eae-47b0-a491-7075b9d2e707",
  },
  {
    id: 2,
    favourite: false,
    songName: "jhume jo pathan",
    artist: "Anirudh Ravichander",
    song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-1d986.appspot.com/o/music%2F02%20-%20Jhoome%20Jo%20Pathaan%20(320%20Kbps).mp3?alt=media&token=9a491fd5-ecb3-45d9-aae1-089faf39899e",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/spotify-clone-1d986.appspot.com/o/image%2Fjhoome%20pathan.jpg?alt=media&token=7d26303a-6687-4b5b-a937-0adc3c4d2740",
  },
  {
    id: 3,
    favourite: false,
    songName: "Tum Jo Milo",
    artist: "Hildur Guðnadóttir",
    song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-1d986.appspot.com/o/music%2F02%20-%20Tum%20Jo%20Milo%20(128%20Kbps).mp3?alt=media&token=fd940eb2-1a02-4718-8392-8626b7a0872d",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/spotify-clone-1d986.appspot.com/o/image%2F65146_4aja.jpg?alt=media&token=65e8e27d-f23e-42fe-b0b7-c6fcd965281f",
  },
  {
    id: 4,
    favourite: false,
    songName: "Tujse Pyaar jo karta hun",
    artist: "Otnicka",
    song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-1d986.appspot.com/o/music%2F03%20-%20Tujhse%20Pyaar%20Karta%20Hoon%20(128%20Kbps).mp3?alt=media&token=cb3b7549-0000-4b48-a21a-40610d87a3f8",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/spotify-clone-1d986.appspot.com/o/image%2F65463_4anta.jpg?alt=media&token=936b43cd-f7b1-4dbc-9f13-11abf4f7d9ac",
  },
  {
    id: 5,
    favourite: false,
    songName: "Ami Je Tomar",
    artist: "Yuvan Shankar Raja",
    song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-1d986.appspot.com/o/music%2FAmi%20Je%20Tomar%20(Fan%20Edit)(PagalWorld.com.se).mp3?alt=media&token=4390b317-e9e1-4ca4-943a-452f9f838b82",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/spotify-clone-1d986.appspot.com/o/image%2Faami%20je%20tumaar.jpg?alt=media&token=8a8f75c8-d5b2-4662-9f80-2af32454428e",
  },
  {
    id: 6,
    songName: "Below",
    artist: "White Town",
    song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-1d986.appspot.com/o/music%2FBelow(PagalWorld.com.se).mp3?alt=media&token=2e67e806-01b2-46f0-8a9b-7d8aefec6d26",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/spotify-clone-1d986.appspot.com/o/image%2Fbelow.jpg?alt=media&token=f1874082-4ff0-4aef-8048-c0678eca5a03",
  },
  {
    id: 7,
    favourite: false,
    songName: "Caran Caran",
    artist: "Gopi Sundar",
    song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-1d986.appspot.com/o/music%2FCaran%20Caran(PagalWorld.com.se).mp3?alt=media&token=e373fba4-31f4-4213-976e-df3872d0d256",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/spotify-clone-1d986.appspot.com/o/image%2F7082_4caran.jpg?alt=media&token=0e9fed5d-fca0-4609-b408-032fe8300d28",
  },
  {
    id: 8,
    favourite: false,
    songName: "Ferrari",
    artist: "Future",
    song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-1d986.appspot.com/o/music%2FFerrari(PagalWorld.com.se).mp3?alt=media&token=a36aa735-a016-4769-99b8-e50ac453819c",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/spotify-clone-1d986.appspot.com/o/image%2F64221_4ferri.jpg?alt=media&token=996bb635-c036-44e0-814e-1268c63360b7",
  },
  {
    id: 9,
    favourite: false,
    songName: "Shut Up",
    artist: "David Guetta",
    song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-1d986.appspot.com/o/music%2FShut%20Up(PagalWorld.com.se).mp3?alt=media&token=d813c54f-7185-4ca7-a0eb-684fd77fa279",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/spotify-clone-1d986.appspot.com/o/image%2FShutup.jpg?alt=media&token=17fcbb1f-fb7e-40f5-9969-d12bdea86e11",
  },
  {
    id: 10,
    favourite: false,
    songName: "Kesariya",
    artist: "CVR Toon ",
    song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-1d986.appspot.com/o/music%2FKesariya(PagalWorld.com.se).mp3?alt=media&token=0bfb06ff-589c-4333-9a6c-5dc8f5e99f02",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/spotify-clone-1d986.appspot.com/o/image%2F6591_4kesharya.jpg?alt=media&token=a55f4056-2107-4a13-849e-1ea59c545f3f",
  },
  {
    id: 11,
    favourite: false,
    songName: "Maan Meri Jaan",
    artist: "CVR Toon ",
    song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-1d986.appspot.com/o/music%2FMaan%20Meri%20Jaan(PagalWorld.com.se).mp3?alt=media&token=48cb961a-4e26-43f2-85cb-6d4ec9894553",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/spotify-clone-1d986.appspot.com/o/image%2Fmeri%20jaan.jpg?alt=media&token=a64072c9-2f2a-41dc-86f6-15dcb0de3f9d",
  },
  {
    id: 12,
    favourite: false,
    songName: "Mamacita",
    artist: "CVR Toon ",
    song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-1d986.appspot.com/o/music%2FMamacita(PagalWorld.com.se).mp3?alt=media&token=fef920df-05bb-4310-85ac-cc01d2544574",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/spotify-clone-1d986.appspot.com/o/image%2F7042_4naamamsida.jpg?alt=media&token=1dde293e-ffff-4693-987a-fcfd1fb80af0",
  },
  {
    id: 13,
    favourite: false,
    songName: "Mehbooba",
    artist: "CVR Toon ",
    song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-1d986.appspot.com/o/music%2FMehbooba%20Main%20Teri%20Mehbooba%20(KGF%20Chapter%202)(PagalWorld.com.se).mp3?alt=media&token=a75f4e0d-23be-49ce-9dd0-e63ab3ae8f66",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/spotify-clone-1d986.appspot.com/o/image%2Fmehbuba.jpg?alt=media&token=75085de0-fa5d-4688-939e-91ca03f012bf",
  },
  {
    id: 14,
    favourite: false,
    songName: "Mera Dil Ye Pukare Aaja",
    artist: "CVR Toon ",
    song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-1d986.appspot.com/o/music%2FMera%20Dil%20Ye%20Pukare%20Aaja%20(Remix)%20DJ%20Usman%20Bhatti(PagalWorld.com.se).mp3?alt=media&token=80012729-c9b4-4527-866a-4ef42162a86d",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/spotify-clone-1d986.appspot.com/o/image%2Fmeradil%20ye%20pukare.jpg?alt=media&token=7db21274-dab9-4d35-8754-51a681ddd499",
  },
  {
    id: 15,
    favourite: false,
    songName: "New Year 2",
    artist: "CVR Toon ",
    song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-1d986.appspot.com/o/music%2FNew%20Year%202023%20Party%20Mix%20-%20DJ%20NYK(PagalWorld.com.se).mp3?alt=media&token=fb1c6603-b598-4e42-bdb5-1a2513a42e9a",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/spotify-clone-1d986.appspot.com/o/image%2F65465_4happy.jpg?alt=media&token=b45ca859-96cb-44a3-9b5d-0adda4a6eeae",
  },
  {
    id: 16,
    favourite: false,
    songName: "New Year Mix",
    artist: "CVR Toon ",
    song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-1d986.appspot.com/o/music%2FNew%20Year%20Mix%202023%20-%20Best%20of%20EDM%20Party%20Electro%20House(PagalWorld.com.se).mp3?alt=media&token=8021416e-5e1f-4057-a750-c1e424bd0694",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/spotify-clone-1d986.appspot.com/o/image%2Fnew%20year%202023%20song.jpg?alt=media&token=4aee3396-425d-475b-8285-98d8db149b8a",
  },
  {
    id: 17,
    favourite: false,
    songName: "Oh Antava Mava",
    artist: "CVR Toon ",
    song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-1d986.appspot.com/o/music%2FOh%20Antava%20Mava(PagalWorld.com.se).mp3?alt=media&token=d68e7301-9771-44a1-a2b1-81cb077d60a1",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/spotify-clone-1d986.appspot.com/o/image%2Fo-antama.jpg?alt=media&token=0fbeba97-14f9-49e2-8c86-80a1cf1fd3ab",
  },
  {
    id: 18,
    favourite: false,
    songName: "SriValli",
    artist: "CVR Toon ",
    song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-1d986.appspot.com/o/music%2FSrivalli(PagalWorld.com.se).mp3?alt=media&token=dec32da2-832e-44ed-9343-cc1b8847269d",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/spotify-clone-1d986.appspot.com/o/image%2Fsrivali.jpg?alt=media&token=4602cf7e-637e-411b-9860-ca62d70052ee",
  },
  {
    id: 19,
    favourite: false,
    songName: "Heer Ranha",
    artist: "CVR Toon ",
    song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-1d986.appspot.com/o/music%2F_%20Heer%20Ranjha(PagalWorld.com.se).mp3?alt=media&token=cd5e7fa8-e2ff-4c8c-a31c-fa6e01f467ad",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/spotify-clone-1d986.appspot.com/o/image%2Fhire-ranjha.jpg?alt=media&token=a1f45af5-bda5-4145-83c1-b9d1e482ae64",
  },
  {
    id: 20,
    favourite: false,
    songName: "Besharam Rang",
    artist: "SRK ",
    song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-1d986.appspot.com/o/music%2F01%20-%20Besharam%20Rang%20(320%20Kbps).mp3?alt=media&token=211e65ff-2f8a-40a1-810d-8f04ef9baa90",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/spotify-clone-1d986.appspot.com/o/image%2Fbesaram%20rang.jpg?alt=media&token=36973440-2951-43e2-9753-d9341d32fbda",
  },
];

export { Songs };
