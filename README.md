<h1 align="center">
	<img src="https://github.com/bryantorresribeiro/Kenzinhos-Nasa-Api/blob/main/src/img/nasa-chan.png" />
</h1>

 <h1 align="center">Kenzinhos Nasa API</h1>

🚨 Atenção essa é uma api intermediária que utiliza a api original: https://api.nasa.gov

- Nessa api você pode pesquisar informações de planetas, metéoros, fenómenos relacionados a astronomia.
- Normalmente ás respostas se baseia em imagens, descrições, autoria e datas.
- Essa é uma api que faz request a outra api, por isso o idioma das respostas vão estár por padrão em inglês.

API tem no total 5 endpoints, como:
- Nasa "Picture of the Day" a imagem premiada do dia🌅
- Fazer uma pesquisa relacionado a astronomia📎
- Pesquisa um conjunto de informações relacionados a astronomia em um intervalo de datas🌗
- Obter uma imagem aleatória de alguma região de Marte👽
- Pesquisar uma imagem de marte relacionado a uma data👽

A url base da API é: https://kenzinhosnasaapi.herokuapp.com/

## Imagem premiada🌅

`GET /nasa/day - FORMATO DA RESPOSTA - STATUS 200`

- Ex: https://kenzinhosnasaapi.herokuapp.com/nasa/day 

```json
{
	"titulo": "Colorful Airglow Bands Surround Milky Way",
	"data": "2022-03-13",
	"autor": "Xiaohan Wang",
	"info": "Why would the sky glow like a giant repeating rainbow?  Airglow.  Now air glows all of the time, but it is usually hard to see. A disturbance however -- like an approaching storm -- may cause noticeable rippling in the Earth's atmosphere. These gravity waves are oscillations in air analogous to those created when a rock is thrown in calm water.  Red airglow likely originates from OH molecules about 87-kilometers high, excited by ultraviolet light from the Sun, while orange and green airglow is likely caused by sodium and oxygen atoms slightly higher up.  While driving near Keluke Lake in Qinghai Provence in China a few years ago, the photographer originally noticed mainly the impressive central band of the Milky Way Galaxy.  Stopping to photograph it, surprisingly, the resulting sensitive camera image showed airglow bands to be quite prominent and span the entire sky. The featured image has been digitally enhanced to make the colors more vibrant.",
	"img": "https://apod.nasa.gov/apod/image/2203/AirglowRings_Wang_1080.jpg"
}
```

## Fazer uma pesquisa📎

`GET /nasa/search/:value - FORMATO DA RESPOSTA - STATUS 200`

- Obs: Deve ser levado em conta o idioma padrão nas pesquisar e sem palavras compostas.  
- Ex: https://kenzinhosnasaapi.herokuapp.com/nasa/search/moon

```json
{
	"titulo": "Sol 8",
	"descricao": "Sol 8",
	"midia": "https://images-assets.nasa.gov/image/PIA04316/PIA04316~thumb.jpg"
}
```

## Conjunto de informações relacionados a astronomia por datas🌗

`GET /nasa/:initialDate/:finalDate - FORMATO DA RESPOSTA - STATUS 200`

- Obs: Se você fizer a pesquisa por um intervalo muito longo a api ira demorar ou não ira te devolver uma reposta.
- Ex: https://kenzinhosnasaapi.herokuapp.com/nasa/2019-01-01/2019-01-02
- Formato de data: YY-MM-DD

```json
[
	{
		"date": "2019-01-01",
		"explanation": "This floating ring is the size of a galaxy.  In fact, it is a galaxy -- or at least part of one: the photogenic Sombrero Galaxy, one of the largest galaxies in the nearby Virgo Cluster of Galaxies.  The dark band of dust that obscures the mid-section of the Sombrero Galaxy in optical light actually glows brightly in infrared light.  The featured image, digitally sharpened, shows the infrared glow, recently recorded by the orbiting Spitzer Space Telescope, superposed in false-color on an existing image taken by NASA's Hubble Space Telescope in optical light. The Sombrero Galaxy, also known as M104, spans about 50,000 light years across and lies 28 million light years away.  M104 can be seen with a small telescope in the direction of the constellation Virgo.   News: New Horizons Spacecraft Passes Ultima Thule",
		"hdurl": "https://apod.nasa.gov/apod/image/1901/sombrero_spitzer_3000.jpg",
		"media_type": "image",
		"service_version": "v1",
		"title": "The Sombrero Galaxy in Infrared",
		"url": "https://apod.nasa.gov/apod/image/1901/sombrero_spitzer_1080.jpg"
	},
	{
		"copyright": "Francesco Antonucci",
		"date": "2019-01-02",
		"explanation": "The Great Nebula in Orion is an intriguing place.  Visible to the unaided eye, it appears as a small fuzzy patch in the constellation of Orion. But this image, an illusory-color four-panel mosaic taken in different bands of infrared light with the Earth orbiting WISE observatory, shows the Orion Nebula to be a bustling  neighborhood of recently formed stars, hot gas, and dark dust.  The power behind much of the Orion Nebula (M42) is the stars of the Trapezium star cluster, seen near the center of the featured image. The orange glow surrounding the bright stars pictured here is their own starlight reflected by intricate dust filaments that cover much of the region.  The current  Orion Nebula cloud complex, which includes the Horsehead Nebula, will slowly disperse over the next 100,000 years.   News: New Horizons Results from Ultima Thule",
		"hdurl": "https://apod.nasa.gov/apod/image/1901/orionred_WISEantonucci_1824.jpg",
		"media_type": "image",
		"service_version": "v1",
		"title": "The Orion Nebula in Infrared from WISE",
		"url": "https://apod.nasa.gov/apod/image/1901/orionred_WISEantonucci_960.jpg"
	}
]
```

## Obter uma imagem aleatória de alguma região de Marte👽

`GET /RamdomMars - FORMATO DA RESPOSTA - STATUS 200`
- Ex: https://kenzinhosnasaapi.herokuapp.com/RamdomMars

```json
{
	"data": "2017-06-06",
	"img": "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01718/opgs/edr/fcam/FLB_550010455EDR_F0632582FHAZ00302M_.JPG"
}
```

## Pesquisar uma imagem de marte relacionado a uma data👽

`GET /SearchMars/:initialDate - FORMATO DA RESPOSTA - STATUS 200`

- Ex: https://kenzinhosnasaapi.herokuapp.com/SearchMars/2020-01-01
- Formato de data: YY-MM-DD

```json
{
	"data": "2020-01-01",
	"img": "https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/02632/opgs/edr/fcam/FLB_631151762EDR_F0781002FHAZ00206M_.JPG"
}
```
