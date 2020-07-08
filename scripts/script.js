const player = document.querySelector(".player")
const letrasSpan = document.querySelector(".conteudo-letras")

// Lista de letras das músicas dos álbuns

const letras = {
    album1: {
        letra1: "<h4>Cowboys From Hell</h4><p>Under the lights where we stand tall<br> Nobody touches us at all<br> Showdown, shootout, spread fear within, without<br> We're gonna take what's ours to have<br> Spread the word throughout the land<br> They say the bad guys wear black<br> We're tagged and can't turn back<br> </p> <p> You see us comin'<br> And you all together run for cover<br> We're takin' over this town<br> </p> <p> Here we come, reach for your gun<br> And you better listen well my friend, you see<br> It's been slow down below,<br> Aimed at you, we're the cowboys from hell<br> Deed is done again, we've won<br> Ain't talking no tall tales friend<br> 'Cause high noon, your doom<br> Comin' for you we're the cowboys from hell<br> </p> <p> Pillage the village, trash the scene<br> But better not take it out on me<br> 'Cause a ghost town is found<br> Where your city used to be<br> So out of the darkness and into the light<br> Sparks fly everywhere in sight<br> From my double barrel, twelve gauge,<br> Can't lock me in your cage<br> </p> <p> You see us comin'<br> And you all together run for cover<br> We're takin' over this town<br> </p> <p> Here we come, reach for your gun<br> And you better listen well my friend, you see<br> It's been slow down below,<br> Aimed at you, we're the cowboys from hell<br> Deed is done again, we've won<br> Ain't talking no tall tales friend<br> 'Cause high noon, your doom<br> Comin' for you we're the cowboys from hell<br> </p> <p> Here we come, reach for your gun<br> And you better listen well my friend, you see<br> It's been slow down below,<br> Aimed at you, we're the cowboys from hell<br> Deed is done again, we've won<br> Ain't talking no tall tales friend<br> 'Cause high noon, your doom<br> Comin' for you we're the cowboys from hell<br> Step aside, we're the cowboys from hell<br> </p>",
        letra2: "<h4>Primal Concrete Sledge</h4><p>There’s a double standard for the way we live<br> If there’s nothing to have, well then there’s nothing to save<br> I’ll break a sweat and I don’t regret<br> What you’d kill to see brings out the god in me.<br> </p> <p> Come and be with me<br> Live my twisted dream<br> Pro devoted pledge<br> Time for primal concrete sledge<br> </p> <p> The man of a thousand retirements<br> Will always be the one to tell you when to quit<br> I won’t take stock in a withered man<br> I’m reaching into you, I’ll make you understand<br> </p> <p> Come and be with me<br> Live my twisted dream<br> Pro devoted pledge<br> Time for primal concrete sledge<br> </p>",
        letra3: "<h4>Psycho Holiday</h4> <p> Empty and sweating<br> Head lying in your hands<br> Shaking in the corner<br> Done too much alcohol<br> Gotta get away from it all<br> ‘Cause it feels my blood is freezing<br> My self insanity has taken its toll<br> Frustration has taken its control<br> </p> <p> Now I’m far from home<br> Spending time alone<br> It’s time to set my demons free<br> Been put to the test<br> My mind laid to rest<br> I’m on a psycho holiday<br> </p> <p> Shot down on sight<br> You are the target of attention<br> One woman here another there<br> You can’t please all the people all the time<br> Can’t tell the strangers<br> From the friends you know<br> Frustration has taken it’s control<br> </p> <p> Now you’re far from home<br> Spending time alone<br> It’s time to set your demons free<br> Been put through the test<br> Your mind laid to rest<br> You’re on a psycho holiday<br> </p> <p> I’m strapped in for life<br> Is this where I lived<br> Or where I died<br> You want my money<br> You take my space<br> My mind is telling me<br> To leave this place<br> My self insanity has taken its toll<br> Frustration has taken its control<br> </p> <p> Now you’re far from home<br> Spending time alone<br> It’s time to set your demons free<br> Been put through the test<br> Your mind laid to rest<br> You’re on a psycho holiday<br> </p>",
        letra4: "<h4>Heresy</h4> <p> Here we are<br> In a world of corruption<br> Human nature is<br> Of violent Breed<br> Who cares if there’s no tomorrow<br> When I die for my future’s<br> Laid out for me<br> Can’t you see?<br> Rise above the lies<br> Morals on a backwards globe<br> A sin to you<br> For me it’s hope.<br> </p> <p> It’s my life and provision<br> Black or white<br> Some pay to pray<br> You question why they<br> Act this way<br> It’s their fucking decision<br> </p> <p> No more judgement day<br> Only tranquility<br> Peace signs, protest lines<br> Mean nothing to me<br> </p> <p> Honesty born in me<br> Heresy<br> </p> <p> I know what’s right or wrong<br> And my belief is stronger<br> Than your advice<br> People, they go to war<br> Because religion gives them<br> Reason to fight<br> Sacrifice, die for pride<br> A group that caters<br> No one’s fees<br> Or synthetic deities<br> Is where I belong<br> My stand is the human race<br> Without a label or a face<br> So they can lick my sack<br> </p> <p> No more judgement day<br> Only tranquility<br> Peace signs, protest lines<br> Mean nothing to me<br> </p> <p> Honesty born in me<br> Heresy<br> </p>",
        letra5: "<h4>Cemetery Gates</h4> <p> Reverend reverend is this some conspiracy?<br> Crucified for no sins<br> An image beneath me<br> Whats within our plans for life<br> It all seems so unreal<br> I’m a man cut in half in this world<br> Left in my misery…<br> </p> <p> The reverend he turned to me<br> Without a tear in his eyes<br> It’s nothing new for him to see<br> I didn’t ask him why<br> I will remember<br> The love our souls had<br> Sworn to make<br> Now I watch the falling rain<br> All my mind can see<br> Now is your (face)<br> </p> <p> Well I guess<br> You took my youth<br> I gave it all away<br> Like the birth of a<br> New-found joy<br> This love would end in rage<br> And when she died<br> I couldn’t cry<br> The pride within my soul<br> You left me incomplete<br> All alone as the<br> Memories now unfold.<br> </p> <p> Believe the word<br> I will unlock my door<br> And pass the<br> Cemetery gates<br> </p> <p> Sometimes when I’m alone<br> I wonder aloud<br> If you’re watching over me<br> Some place far abound<br> I must reverse my life<br> I can’t live in the past<br> Then set my soul free<br> Belong to me at last<br> </p> <p> Through all those<br> Complex years<br> I thought I was alone<br> I didn’t care to look around<br> And make this world my own<br> And when she died<br> I should’ve cried and spared myself some pain…<br> Left me incomplete<br> All alone as the memories still remain<br> </p> <p> The way we were<br> The chance to save my soul<br> And my concern is now in vain<br> Believe the word<br> I will unlock my door<br> And pass the cemetery gates<br> </p>",
        letra6: "<h4>Domination</h4> <p> Agony is the price<br> That you’ll pay in the end<br> Domination consumes you<br> Then calls you a friend<br> It’s a twisted fall<br> Binds are like steel<br> And manipulates the will to be<br> And it’s hard to see<br> How soon we forget<br> When there’s nothing else<br> Left to destroy<br> It’s a useless ploy<br> </p> <p> Your eyes will see<br> The dawn of the day<br> And the writing<br> On the wall<br> Those words that stare<br> Into your soul<br> And to yourself<br> You will befall<br> </p> <p> It’s domination pushed into living hell<br> Domination a now blacked heart<br> Is reaching out divinity<br> Body suspended by chains over razors<br> And nails it’s a penalty<br> Each razor a vice and each nail<br> Marks the demise of you life.<br> Grim construction grows<br> Has life played a trick<br> Sealed you in brick by brick<br> Till your end forcing you to bend<br> </p> <p> Your eyes will see<br> The dawn of the day<br> And the writing<br> On the wall<br> Those words that stare<br> Into your soul<br> And to yourself<br> You will befall<br> </p> <p> It’s domination pushed into living hell<br> Domination a now blacked heart<br> Is reaching out divinity<br> Body suspended by chains over razors<br> And nails it’s a penalty<br> Each razor a vice and each nail<br> Marks the demise of you life.<br> Grim construction grows<br> Has life played a trick<br> Sealed you in brick by brick<br> Till your end forcing you to bend<br> </p>",
        letra7: "<h4>Shattered</h4> <p> It’s storming broken glass, corpses left in piles<br> Ungracious bludgeonmnet that breaks the earth for miles<br> Nothing can stop it, the day has come, from below it’s catastrophic<br> </p> <p> Freezing, there’s no healing families are dying<br> </p> <p> This world is shattered… all shattered<br> </p> <p> Life crushing turbulence, this wrath can’t be denied<br> Wishing you could help your friends, standing where they died<br> Echoes haunting, a hollow planet, lacerations, dissected nation<br> </p> <p> Freezing, there’s no healing everyone is dying<br> </p> <p> This world is shattered… all shattered<br> </p>",
        letra8: "<h4>Clash With Reality</h4> <p> Sometimes I know<br> I feel untouchable<br> Drowning in life<br> Caught up in the accessible<br> Back down the ground<br> I hear the sound<br> there’s no escape<br> The concrete cloud<br> Spilling on me<br> Drenching me with<br> Laymen’s sins<br> I hear the sirens<br> From the back of me<br> I’m crashing face first<br> Into the glass eye<br> </p> <p> Clash with reality<br> It rears it’s ugly head<br> Clash with reality<br> The indescribable<br> Let the dogs lie<br> Where we sleep<br> Irrelevant theme<br> </p> <p> A situation and there’s<br> Nothing but right<br> In kicks the door<br> Nobody moves<br> ‘Cause in walks the problem<br> Dictates your fate<br> Evicts, convicts<br> Who’ll sign the writ of life?<br> This now becomes<br> Their morbid game<br> Who’s piss poor excuse<br> Is this for a world?<br> It swells my hatred<br> Day by day<br> </p> <p> Clash with reality<br> It rears it’s ugly head<br> Clash with reality<br> The indescribable<br> Let the dogs lie<br> Where we sleep<br> Irrelevant theme<br> </p>",
        letra9: "<h4>Medicine Man</h4> <p> Many distant miles away<br> Past the shores of ever dark<br> There stays a magic man<br> Who bears an evil mark<br> He helps all concerned<br> Those who come again return<br> Injecting lies while fires burn<br> The devil’s heart<br> With angel’s words<br> Have you wondered<br> What heaven’s like?<br> He can show you in one night<br> Overwhelming with euphoric lift<br> To lure you to steal your gift<br> </p> <p> Intoxication<br> Seeping down to the bone<br> And there’s no question<br> Where you have to go<br> </p> <p> Understand just take his hand<br> He’s the medicine man<br> </p> <p> Once proud and fearless men<br> With desire in their eyes<br> Lost strong and fruitful lives<br> To self-indulgent ties<br> Their souls were dipped in venom<br> And put into a box<br> Then placed upon a crowded shelf<br> Where countless souls now rot<br> Have you ever wondered what hell’s like?<br> He can take you there<br> Just one taste and you’ll be back<br> And by the high you’ll swear<br> </p> <p> Intoxication<br> Seeping down to the bone<br> And there’s no question<br> Where you have to go<br> </p> <p> Understand just take his hand<br> He’s the medicine man<br> </p>",
        letra10: "<h4>Message In Blood</h4> <p> There’s a place that I keep deep inside me<br> It can trigger my mind<br> All along I knew it has been with me<br> Since I was just a child<br> </p> <p> I just summon power within my soul<br> It has given me life, beyond life I take<br> Blame for my murderous problem my signature<br> Always reminds<br> </p> <p> It’s a message in blood<br> It’s your cryptic warning<br> Within the message in blood<br> Marks the years of pain,<br> And your godforsaken ending to life<br> </p> <p> I’m provoked into sick confrontations, brutal<br> Time after time, bed of nails, suffocation,<br> life’s ending, slay in different designs<br> One mans misery is another mans mystery<br> No one cares to understand my<br> Demented means<br> Sticks and stones can break all your<br> brittle bones, epitaph written at your feet<br> </p> <p> It’s a message in blood<br> It’s your cryptic warning<br> Within the message in blood<br> Marks the years of pain,<br> And your godforsaken ending to life<br> </p>",
        letra11: "<h4>The Sleep</h4> <p> Understanding what has<br> Happened before us<br> We are confined to a<br> Darkened hidden tomb<br> The conquering of our world<br> As we knew it<br> Rise above this pit<br> Of sorrow and pain<br> Among the few<br> We are the avant leaders<br> We’ve got to live<br> Through this trouble and decay<br> </p> <p> This question haunts my mind<br> Will we survive this night?<br> We’re harboring the meek<br> Will we survive the sleep?<br> </p> <p> Unsure and scared<br> We are planning our reprise<br> Revolves around this world<br> We don’t know anymore<br> The odds against us<br> Yet we’re stronger and prevailing<br> Learn from mistakes<br> Counting souls for sale<br> </p> <p> This question haunts my mind<br> Will we survive this night?<br> We’re harboring the meek<br> Will we survive the sleep?<br> </p>",
        letra12: "<h4>The Art Of Shredding</h4> <p> Unity is a rare thing<br> Blind eyes of society bring<br> The category of minority<br> Now what are we supposed to be?<br> Born free to be<br> Powerless to change the world<br> With our lives in the hands of madmen<br> </p> <p> Now in times when society needs us<br> This is where the sin begins<br> We’re aware they’re going to free us<br> Rage from our hearts within<br> Born of this world<br> Which is a living hell<br> But we’ll be closer to heaven<br> </p> <p> So now, this is the art<br> To shred… it’s only emotion<br> </p>"
    }
}

// Lista de IDs das músicas dos álbuns no Deezer

const songs = {
    album1: {
        song1: "714397", // IDs das músicas
        song2: "714401",
        song3: "714407S",
        song4: "714412",
        song5: "714420",
        song6: "714426",
        song7: "714429",
        song8: "714435",
        song9: "714441",
        song10: "714447",
        song11: "714452",
        song12: "714456"
    }
}

// Player (Reprodutor de Áudio) do Deezer

const configPlayer = {
    format: "square",  // Formato do player
    autoplay: "true",  // Tocar automaticamente
    playlist: "false", // Lista de músicas
    layout: "dark",    // Tema do player
    size: "medium",    // Tamanho
    type: "tracks",    // Tipo
    width: "300",      // Comprimento
    height: "300"      // Altura
}

// Arrow Function para troca de IDs e parâmetros de configuração do player numa URL

const putID = (id_song) => {
    return "https://www.deezer.com/plugins/player?format="+ configPlayer.format +"&autoplay=" + configPlayer.autoplay + "&playlist=" + configPlayer.playlist + "&width=" + configPlayer.width +"&height=" + configPlayer.height + "&color=007FEB&layout=" + configPlayer.layout + "&size=" + configPlayer.size + "&type=" + configPlayer.type + "&id=" + id_song + "&app_id=1"
}

// ----- Cowboys From Hell -----

// Adiciona evento para cada item da tabela de músicas.

document.querySelectorAll(".song-list td").forEach(elemento => elemento.addEventListener("click", () => {
    switch (elemento.id) {
        case "cowboys1":
            player.src = putID(songs.album1.song1)
            letrasSpan.innerHTML = letras.album1.letra1
            break
        case "cowboys2":
            player.src = putID(songs.album1.song2)
            letrasSpan.innerHTML = letras.album1.letra2
            break
        case "cowboys3":
            player.src = putID(songs.album1.song3)
            letrasSpan.innerHTML = letras.album1.letra3
            break
        case "cowboys4":
            player.src = putID(songs.album1.song4)
            letrasSpan.innerHTML = letras.album1.letra4
            break
        case "cowboys5":
            player.src = putID(songs.album1.song5)
            letrasSpan.innerHTML = letras.album1.letra5
            break
        case "cowboys6":
            player.src = putID(songs.album1.song6)
            letrasSpan.innerHTML = letras.album1.letra6
            break
        case "cowboys7":
            player.src = putID(songs.album1.song7)
            letrasSpan.innerHTML = letras.album1.letra7
            break
        case "cowboys8":
            player.src = putID(songs.album1.song8)
            letrasSpan.innerHTML = letras.album1.letra8
            break
        case "cowboys9":
            player.src = putID(songs.album1.song9)
            letrasSpan.innerHTML = letras.album1.letra9
            break
        case "cowboys10":
            player.src = putID(songs.album1.song10)
            letrasSpan.innerHTML = letras.album1.letra10
            break
        case "cowboys11":
            player.src = putID(songs.album1.song11)
            letrasSpan.innerHTML = letras.album1.letra11
            break
        case "cowboys12":
            player.src = putID(songs.album1.song12)
            letrasSpan.innerHTML = letras.album1.letra12
            break
        default:
            console.log("Valor Inválido")
            break
    }
}))