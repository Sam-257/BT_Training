const $ = (data) => document.querySelector(data);

// const data = [
//   {
//     postId: 1,
//     id: 1,
//     name: "id labore ex et quam laborum",
//     email: "Eliseo@gardner.biz",
//     body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium",
//   },
//   {
//     postId: 1,
//     id: 2,
//     name: "quo vero reiciendis velit similique earum",
//     email: "Jayne_Kuhic@sydney.com",
//     body: "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et",
//   },
//   {
//     postId: 1,
//     id: 3,
//     name: "odio adipisci rerum aut animi",
//     email: "Nikita@garfield.biz",
//     body: "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione",
//   },
//   {
//     postId: 1,
//     id: 4,
//     name: "alias odio sit",
//     email: "Lew@alysha.tv",
//     body: "non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati",
//   },
//   {
//     postId: 1,
//     id: 5,
//     name: "vero eaque aliquid doloribus et culpa",
//     email: "Hayden@althea.biz",
//     body: "harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et",
//   },
//   {
//     postId: 2,
//     id: 6,
//     name: "et fugit eligendi deleniti quidem qui sint nihil autem",
//     email: "Presley.Mueller@myrl.com",
//     body: "doloribus at sed quis culpa deserunt consectetur qui praesentium\naccusamus fugiat dicta\nvoluptatem rerum ut voluptate autem\nvoluptatem repellendus aspernatur dolorem in",
//   },
//   {
//     postId: 2,
//     id: 7,
//     name: "repellat consequatur praesentium vel minus molestias voluptatum",
//     email: "Dallas@ole.me",
//     body: "maiores sed dolores similique labore et inventore et\nquasi temporibus esse sunt id et\neos voluptatem aliquam\naliquid ratione corporis molestiae mollitia quia et magnam dolor",
//   },
//   {
//     postId: 2,
//     id: 8,
//     name: "et omnis dolorem",
//     email: "Mallory_Kunze@marie.org",
//     body: "ut voluptatem corrupti velit\nad voluptatem maiores\net nisi velit vero accusamus maiores\nvoluptates quia aliquid ullam eaque",
//   },
//   {
//     postId: 2,
//     id: 9,
//     name: "provident id voluptas",
//     email: "Meghan_Littel@rene.us",
//     body: "sapiente assumenda molestiae atque\nadipisci laborum distinctio aperiam et ab ut omnis\net occaecati aspernatur odit sit rem expedita\nquas enim ipsam minus",
//   },
//   {
//     postId: 2,
//     id: 10,
//     name: "eaque et deleniti atque tenetur ut quo ut",
//     email: "Carmen_Keeling@caroline.name",
//     body: "voluptate iusto quis nobis reprehenderit ipsum amet nulla\nquia quas dolores velit et non\naut quia necessitatibus\nnostrum quaerat nulla et accusamus nisi facilis",
//   },
// ];

const database = {
  results: [
    {
      gender: "male",
      name: { title: "Mr", first: "Neotero", last: "da Costa" },
      location: {
        street: { number: 197, name: "Rua Paraíba " },
        city: "Governador Valadares",
        state: "Rondônia",
        country: "Brazil",
        postcode: 81526,
        coordinates: { latitude: "-75.9707", longitude: "-138.7175" },
        timezone: {
          offset: "-5:00",
          description: "Eastern Time (US & Canada), Bogota, Lima",
        },
      },
      email: "neotero.dacosta@example.com",
      login: {
        uuid: "b34075cc-5e6a-47d0-8cd8-e73f72193e7b",
        username: "smalllion895",
        password: "rockhard",
        salt: "v6zQE1aq",
        md5: "67f1a6803df718895729d48cf7affbd7",
        sha1: "0012c88dd5883c0f3dc9abe4fa68c02371a0d7c8",
        sha256:
          "fa4448c6b3b029dfed1511288b9fc785920f19206e5c156da2587584576ee218",
      },
      dob: { date: "1970-05-10T16:47:59.503Z", age: 52 },
      registered: { date: "2007-03-21T05:49:18.854Z", age: 15 },
      phone: "(41) 0529-4798",
      cell: "(05) 6770-2711",
      id: { name: "CPF", value: "410.480.519-75" },
      picture: {
        large: "https://randomuser.me/api/portraits/men/99.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/99.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/99.jpg",
      },
      nat: "BR",
    },
    {
      gender: "male",
      name: { title: "Mr", first: "Amadis", last: "Vieira" },
      location: {
        street: { number: 4341, name: "Rua Santa Luzia " },
        city: "Contagem",
        state: "Mato Grosso do Sul",
        country: "Brazil",
        postcode: 56756,
        coordinates: { latitude: "78.8691", longitude: "140.3041" },
        timezone: {
          offset: "-1:00",
          description: "Azores, Cape Verde Islands",
        },
      },
      email: "amadis.vieira@example.com",
      login: {
        uuid: "089cb13c-2272-417d-891e-c9151f66a468",
        username: "whitepanda869",
        password: "marma",
        salt: "36JFSg5y",
        md5: "e10f668e724fae955e0c3312d195e15e",
        sha1: "3dc5072c8c0ac40808ba29132a973214b4fae6c9",
        sha256:
          "fe210d00ae916f6f45acf5777a813f635db962b6f17b1ad50a34607dbd048194",
      },
      dob: { date: "1977-12-27T23:02:36.118Z", age: 44 },
      registered: { date: "2011-12-31T07:06:50.884Z", age: 10 },
      phone: "(25) 1645-7370",
      cell: "(65) 0809-1614",
      id: { name: "CPF", value: "400.096.268-96" },
      picture: {
        large: "https://randomuser.me/api/portraits/men/14.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/14.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/14.jpg",
      },
      nat: "BR",
    },
    {
      gender: "female",
      name: { title: "Miss", first: "آوا", last: "علیزاده" },
      location: {
        street: { number: 341, name: "میدان 7 تیر" },
        city: "بیرجند",
        state: "قزوین",
        country: "Iran",
        postcode: 39122,
        coordinates: { latitude: "67.7963", longitude: "154.1522" },
        timezone: {
          offset: "-7:00",
          description: "Mountain Time (US & Canada)",
        },
      },
      email: "aw.aalyzdh@example.com",
      login: {
        uuid: "98b1e69f-bd97-4238-9b69-c5c1981e1e2a",
        username: "heavykoala764",
        password: "cruise",
        salt: "RldKhTyh",
        md5: "990a8bc1a8b7e778d216b88d551f2caa",
        sha1: "da0e075b8256a24579a2d41506cd15eaec2b5e51",
        sha256:
          "6f8aa793f56fe0ca39cd5be1771650d257fa7cad328c9be078a9b3de033dffe1",
      },
      dob: { date: "1976-06-22T04:32:53.357Z", age: 46 },
      registered: { date: "2017-10-14T13:38:02.458Z", age: 4 },
      phone: "048-08055507",
      cell: "0920-103-6768",
      id: { name: "", value: null },
      picture: {
        large: "https://randomuser.me/api/portraits/women/76.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/76.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/76.jpg",
      },
      nat: "IR",
    },
    {
      gender: "female",
      name: { title: "Miss", first: "Zoe", last: "Woods" },
      location: {
        street: { number: 7914, name: "North Road" },
        city: "Newry",
        state: "Mid Glamorgan",
        country: "United Kingdom",
        postcode: "TE7 0NW",
        coordinates: { latitude: "-59.1293", longitude: "-30.4414" },
        timezone: {
          offset: "+10:00",
          description: "Eastern Australia, Guam, Vladivostok",
        },
      },
      email: "zoe.woods@example.com",
      login: {
        uuid: "7000ea4a-cea9-4f07-820a-485b2091b614",
        username: "bluegoose115",
        password: "gidget",
        salt: "Cgj7Y9tH",
        md5: "92632639f5f6dc95aaa01ea31ea6bc95",
        sha1: "741c263178493e2e353c169acf129ceb415919e2",
        sha256:
          "857b0bfd6dd411097cd8c9669508568de4c57146b88dd450fc36fda800659a25",
      },
      dob: { date: "1986-04-05T11:09:52.546Z", age: 36 },
      registered: { date: "2014-11-04T18:16:14.576Z", age: 7 },
      phone: "0171 814 3732",
      cell: "07692 724556",
      id: { name: "NINO", value: "BH 94 28 20 G" },
      picture: {
        large: "https://randomuser.me/api/portraits/women/70.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/70.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/70.jpg",
      },
      nat: "GB",
    },
    {
      gender: "female",
      name: { title: "Ms", first: "Ružica", last: "Jović" },
      location: {
        street: { number: 6197, name: "DragolЈuba Jeličića " },
        city: "Kučevo",
        state: "Nišava",
        country: "Serbia",
        postcode: 71554,
        coordinates: { latitude: "-4.2420", longitude: "-19.8953" },
        timezone: { offset: "-12:00", description: "Eniwetok, Kwajalein" },
      },
      email: "ruzica.jovic@example.com",
      login: {
        uuid: "b8cc7e0d-0999-40b3-9205-bbbd7dff1fc8",
        username: "orangefrog101",
        password: "food",
        salt: "pOiYqCB3",
        md5: "50e7592556899c37d1500846b36341a5",
        sha1: "f9c7148bf0df0b6ea91f010d646c6dc2f0e4ec66",
        sha256:
          "0e32cea23fdd90742dcb23a2c471a9d5b296114d3934b15e6e097baa808efe59",
      },
      dob: { date: "1972-04-08T22:35:57.989Z", age: 50 },
      registered: { date: "2006-11-17T18:29:16.104Z", age: 15 },
      phone: "025-5343-634",
      cell: "066-3086-459",
      id: { name: "SID", value: "318271512" },
      picture: {
        large: "https://randomuser.me/api/portraits/women/27.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/27.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/27.jpg",
      },
      nat: "RS",
    },
    {
      gender: "female",
      name: { title: "Miss", first: "Maëva", last: "Arnaud" },
      location: {
        street: { number: 1082, name: "Place de la Mairie" },
        city: "Mulhouse",
        state: "Aisne",
        country: "France",
        postcode: 24074,
        coordinates: { latitude: "15.4692", longitude: "51.1824" },
        timezone: { offset: "-3:30", description: "Newfoundland" },
      },
      email: "maeva.arnaud@example.com",
      login: {
        uuid: "e712fcf5-8636-40ba-b46a-7d6b0a07960a",
        username: "ticklishduck767",
        password: "madeline",
        salt: "RuGUJkyM",
        md5: "8227884cdcb45d4cf03dc50a0a59e17c",
        sha1: "eaf20b0aa6e490f97348b5629fe3925325727205",
        sha256:
          "12d445d5ae4f8c1a889354b49186dacd8f6fb9deec6de46b8d37b35bc72665f3",
      },
      dob: { date: "1962-08-17T11:01:13.477Z", age: 60 },
      registered: { date: "2005-05-30T06:14:17.346Z", age: 17 },
      phone: "02-02-93-64-96",
      cell: "06-93-63-91-97",
      id: { name: "INSEE", value: "2620769222670 03" },
      picture: {
        large: "https://randomuser.me/api/portraits/women/2.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/2.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/2.jpg",
      },
      nat: "FR",
    },
    {
      gender: "male",
      name: { title: "Mr", first: "Ray", last: "Griffin" },
      location: {
        street: { number: 5457, name: "Oak Lawn Ave" },
        city: "Midland",
        state: "Alabama",
        country: "United States",
        postcode: 31504,
        coordinates: { latitude: "0.7024", longitude: "85.5283" },
        timezone: {
          offset: "+5:00",
          description: "Ekaterinburg, Islamabad, Karachi, Tashkent",
        },
      },
      email: "ray.griffin@example.com",
      login: {
        uuid: "14fc2020-7fbb-4d27-9c54-c5c457bd403a",
        username: "organicladybug124",
        password: "blessing",
        salt: "L8qwosfX",
        md5: "15c0c9ffe441b8c97ad4f3326084237a",
        sha1: "bc1c2145ad8aca1ba158fbd66d9eb1ead3a4555b",
        sha256:
          "5eb23a8fa229c52790bf5d15714306b1dcb16f2dad2116deb36a3d824555ed9a",
      },
      dob: { date: "1950-09-12T11:12:36.290Z", age: 72 },
      registered: { date: "2006-07-23T00:45:50.584Z", age: 16 },
      phone: "(430) 398-6102",
      cell: "(211) 567-4753",
      id: { name: "SSN", value: "357-15-2920" },
      picture: {
        large: "https://randomuser.me/api/portraits/men/42.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/42.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/42.jpg",
      },
      nat: "US",
    },
    {
      gender: "female",
      name: { title: "Miss", first: "Paula", last: "Nieto" },
      location: {
        street: { number: 333, name: "Calle Mota" },
        city: "Lorca",
        state: "Andalucía",
        country: "Spain",
        postcode: 53488,
        coordinates: { latitude: "-47.7351", longitude: "-167.6927" },
        timezone: { offset: "-9:00", description: "Alaska" },
      },
      email: "paula.nieto@example.com",
      login: {
        uuid: "102544aa-0d9e-4f6a-bc6a-8c2194aa1cf6",
        username: "blackkoala839",
        password: "beast1",
        salt: "IlY2ah1X",
        md5: "0a1ce720c0e405529385dab723ad30c8",
        sha1: "a1c494e1f30b354066c35cc6dbd161854c817482",
        sha256:
          "59a5b3205ba693e83ad5571f06512cbece5bdadb6ffdb35eb402f33bc97eb8a9",
      },
      dob: { date: "1984-06-27T22:46:32.439Z", age: 38 },
      registered: { date: "2017-02-21T00:31:50.082Z", age: 5 },
      phone: "903-539-814",
      cell: "613-017-862",
      id: { name: "DNI", value: "16572037-D" },
      picture: {
        large: "https://randomuser.me/api/portraits/women/79.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/79.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/79.jpg",
      },
      nat: "ES",
    },
    {
      gender: "female",
      name: { title: "Miss", first: "Charline", last: "Girard" },
      location: {
        street: { number: 6752, name: "Rue André-Gide" },
        city: "Mulhouse",
        state: "Deux-Sèvres",
        country: "France",
        postcode: 52658,
        coordinates: { latitude: "-23.6101", longitude: "110.5654" },
        timezone: {
          offset: "+4:00",
          description: "Abu Dhabi, Muscat, Baku, Tbilisi",
        },
      },
      email: "charline.girard@example.com",
      login: {
        uuid: "a88022d1-c05a-402f-9626-0465ed63af4c",
        username: "biglion753",
        password: "lback",
        salt: "7gWvmjLH",
        md5: "c9b4d1ff03c93edbe45dd7f5f5a0f240",
        sha1: "2dce6e52a19f2122562e0d716384bedb2f83a0b6",
        sha256:
          "1f3fc533b20f34b234168d29b96d484d08b2aa1be71e4315c231c1eaf454c150",
      },
      dob: { date: "1974-11-09T23:39:48.559Z", age: 47 },
      registered: { date: "2003-01-01T14:58:23.642Z", age: 19 },
      phone: "02-32-61-02-34",
      cell: "06-28-24-39-12",
      id: { name: "INSEE", value: "2741041428649 74" },
      picture: {
        large: "https://randomuser.me/api/portraits/women/80.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/80.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/80.jpg",
      },
      nat: "FR",
    },
    {
      gender: "female",
      name: { title: "Ms", first: "Lavanya", last: "Patil" },
      location: {
        street: { number: 7343, name: "Santhekatte" },
        city: "Hospet",
        state: "Rajasthan",
        country: "India",
        postcode: 30444,
        coordinates: { latitude: "-46.9909", longitude: "-15.5786" },
        timezone: {
          offset: "+11:00",
          description: "Magadan, Solomon Islands, New Caledonia",
        },
      },
      email: "lavanya.patil@example.com",
      login: {
        uuid: "89989691-b2b0-47de-978b-09b66613d33a",
        username: "blackmouse220",
        password: "spider",
        salt: "rsMJUPsh",
        md5: "5aa45a7fbcf78205ca002bfee9b1865b",
        sha1: "7b36bd66f99bd567eb20f24236287b265fc06c4c",
        sha256:
          "75db57a34a5e2e2933250f1a0376339f4ab6081681109e0985d4424ea2d01b16",
      },
      dob: { date: "1966-12-16T13:48:42.366Z", age: 55 },
      registered: { date: "2016-09-03T07:07:00.369Z", age: 6 },
      phone: "9493208251",
      cell: "7550318721",
      id: { name: "UIDAI", value: "563291716990" },
      picture: {
        large: "https://randomuser.me/api/portraits/women/81.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/81.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/81.jpg",
      },
      nat: "IN",
    },
  ],
  info: { seed: "648c1b279c6f156b", results: 10, page: 1, version: "1.4" },
};

const displayInfo = () => {
    for(item of database.results){
        let row = document.createElement("tr");
        let profile = document.createElement("td");
        let name = document.createElement("td");
        let email = document.createElement("td");
        let phone = document.createElement("td");
        let address = document.createElement("td");
        let image = document.createElement("img");
        image.setAttribute('src',item.picture.thumbnail);
        profile.appendChild(image);
        name.innerHTML = item.name.first + ' ' + item.name.last;
        email.innerHTML = item.email;
        phone.innerHTML = item.phone;
        address.innerHTML = item.location.city + ' ' + item.location.postcode;
        row.appendChild(profile);
        row.appendChild(name);
        row.appendChild(email);
        row.appendChild(phone);
        row.appendChild(address);
        $("tbody").appendChild(row);
    }
}

// const display = () => {
//   for (item of data) {
//     let row = document.createElement("tr");
//     let id = document.createElement("td");
//     let name = document.createElement("td");
//     let body = document.createElement("td");
//     id.innerHTML = item.id;
//     name.innerHTML = item.name;
//     body.innerHTML = item.body;
//     row.appendChild(id);
//     row.appendChild(name);
//     row.appendChild(body);
//     $("tbody").appendChild(row);
//   }
// };

// display();
displayInfo();
