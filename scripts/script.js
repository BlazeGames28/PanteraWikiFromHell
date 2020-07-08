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
    },
    album2: {
        letra1: "<h4>Mouth For War</h4> <p> Revenge<br> I’m screaming revenge again<br> Wrong<br> I’ve been wrong for far too long<br> Been constantly so frustrated<br> I’ve moved mountains with less<br> When I channel my hate to productive<br> I don’t find it hard to impress<br> </p> <p> Bones in traction<br> Hands break to hone raw energy<br> Bold and disastrous<br> My ears can’t hear what you say to me<br> </p> <p> Hold your mouth for the war<br> Use it for what it’s for<br> Speak the truth about me<br> Determined<br> </p> <p> Possessed<br> I feel a conquering will down inside me<br> Strength<br> The strength of many to crush<br> Who might stop me<br> My strength is in number<br> And my soul lies in every one<br> The releasing of anger can better any medicine under the sun<br> </p> <p> There comes a time within everyone to close your eyes to what’s real<br> No comprehension to fail<br> I vacuum the wind for my sail<br> Can’t be the rest<br> Let others waste my time<br> Owning success is the bottom line.<br> Like a knife into flesh<br> After life is to death<br> Pulling and punching the rest of duration<br> NO ONE can piss on this determination<br> </p>",
        letra2: "<h4>A New Level</h4> <p> Now a new look in my eyes my spirit rise<br> Forget the past<br> Present tense works and lasts<br> Got shit on<br> Pissed on<br> Spit on<br> Stepped on<br> Fucked with<br> Pointed at by lesser men<br> </p> <p> New life in place of old life<br> Unscarred by trials<br> </p> <p> A new level of confidence and power<br> </p> <p> Demanding plea for unity between us all —<br> United stand<br> Death before divided fall<br> In mock military order<br> Vulgar<br> Power<br> Impatient<br> Because time is shorter<br> </p> <p> No fucking surrender<br> Can’t lose<br> Life kills<br> </p>",
        letra3: "<h4>Walk</h4> <p> Can’t you see I’m easily bothered by persistence<br> One step from lashing out at you…<br> You want in to get under my skin<br> And call yourself a friend<br> I’ve got more friends like you<br> What do I do?<br> </p> <p> Is there no standard anymore?<br> What it takes, who I am, where I’ve been belong<br> You can’t be something you’re not<br> Be yourself, by yourself<br> Stay away from me<br> A lesson learned in life<br> Known from the dawn of time<br> </p> <p> Respect, walk, what did you say?<br> Respect, walk, are you talking to me?<br> Are you talking to me?<br> </p> <p> Run your mouth when I’m not around, it’s easy to achieve<br> You cry to weak friends that sympathize<br> Can you hear the violins playing your song?<br> Those same friends tell me your every word<br> </p> <p> Respect, walk, what did you say?<br> Respect, walk, are you talking to me?<br> Respect, walk, what did you say?<br> Respect, walk, are you talking to me?<br> Are you talking to me?<br> </p> <p> No way punk!<br> </p> <p> Respect, walk, what did you say?<br> Respect, walk, are you talking to me?<br> Respect, walk, what did you say?<br> Respect, walk, are you talking to me?<br> Are you talking to me?<br> </p> <p> Walk on home, boy!<br> </p>",
        letra4: "<h4>Fucking Hostile</h4> <p> Almost every day<br> I see the same face<br> On broken picture tube<br> It fits the attitude<br> If you could see yourself<br> You put you on a shelf<br> Your verbal masturbate<br> Promise to nauseate<br> Today I’ll play the part of non-parent<br> Not make a hundred rules<br> For you to know about yourself<br> Not lie and make you believe<br> What’s evil is making love<br> and making friends<br> and meeting God you’re own way<br> The right way<br> </p> <p> To see<br> To bleed<br> Cannot be taught<br> In turn<br> You’re making us<br> Fucking hostile<br> </p> <p> We stand alone<br> </p> <p> The truth in right and wrong<br> The boundaries of the law<br> You seem to miss the point<br> Arresting for a joint?<br> You seem to wonder why<br> Hundreds of people die<br> You’re writing tickets man<br> My mom got jumped — they ran!<br> Now I’ll play a public servant<br> To serve and protect<br> By the law and the state<br> I’d bust the punks<br> That rape steal and murder<br> And leave you be<br> If you crossed me<br> I’d shake your hand like a man<br> Not a god<br> </p> <p> Come meet your maker, boy<br> Some things you can’t enjoy<br> Because of heaven/hell<br> A fucking wives’ tale<br> They put it in your head<br> Then put you in your bed<br> He’s watching say your prayers<br> Cause God is everywhere<br> Now I’ll play a man learning priesthood<br> Who’s about to take the ultimate test in life<br> I’d question things because I am human<br> And call NO ONE my father who’s no closer that a stranger<br> </p> <p> I won’t listen<br> </p>",
        letra5: "<h4>This Love</h4> <p> If ever words were spoken<br> Painful and untrue<br> I said I loved but I lied<br> In my life<br> All I wanted<br> Was the keeping<br> Of someone like you<br> As it turns out<br> Deeper within me<br> Love was twisted and pointed at you<br> </p> <p> Never ending pain, quickly ending life —<br> </p> <p> You keep this love, thing, love, child, love, toy<br> You keep this love, fist, love, scar, love, break<br> You keep this love<br> </p> <p> I’d been the tempting one<br> Stole her from herself<br> This gift in pain<br> Her pain was life<br> And sometimes I feel so sorry<br> I regret this the hurting of you<br> But you make me so unhappy<br> I’d take my life and leave love with you<br> </p> <p> I’d kill myself for you, I’d kill you for myself —<br> </p> <p> No more head trips<br> </p>",
        letra6: "<h4>Rise</h4> <p> We’ve got no time to lose<br> Your news is old news<br> Hate this, hate me, hate this<br> Right approach for the wrong<br> It’s time to spread the word<br> Let the voice be heard<br> All of us, one of us, all of us<br> Dominate and take the motherfucking world<br> </p> <p> Mass prediction, unification<br> Breathing life into our lungs<br> EVERY creed and EVERY kind<br> To give us depth for strength<br> </p> <p> Taught when we’re young to hate one another<br> It’s time to have a new reign of power<br> Make pride universal so no one gives in<br> Turn our backs on those who oppose<br> Then when confronted we ask them the question<br> What’s wrong with their mind?<br> What’s wrong with your mind?<br> </p> <p> It’s time to RISE<br> </p> <p> We’ve lived with past mistakes<br> And we’ve lived with our own<br> Forgive, forget forgive<br> Be a man, not a child<br> There are to tears for peace<br> Of the common sympathies<br> Educate, reinstate, educate<br> A thing of past<br> The trouble in the states<br> </p> <p> It’s time to rise<br> </p>",
        letra7: "<h4>No Good (Attack The Radical)</h4> <p> In the states<br> There’s a problem with race<br> Because of ignorant past burned fires<br> From evolution<br> We’ve been killing each other<br> I figure man should have it down to a science<br> </p> <p> No chance<br> Not for a minute<br> Not for a second<br> I won’t be defensive<br> I’m straight out in my opinion<br> You’d better listen to a man who knows what he is saying<br> I’ve seen your side<br> You run and hide for the mere fact that you feel inferior<br> Be superior<br> And know your interior<br> </p> <p> Race, pride, prejudice<br> Black man, white man<br> No stand<br> Live in the past<br> We make it last<br> A hated mass<br> No solution<br> Mind pollution<br> For revolution<br> </p> <p> So low behold my eyes<br> This land of fools will rise<br> No good<br> For no one<br> </p> <p> You blame oppression and play the role of criminals<br> To rape and burn show progress is minimal<br> White hoods and militants you know it’s such a pity<br> Living, breathing<br> Violence in your city<br> </p> <p> If one man<br> Had one home<br> In one world<br> Held live alone without variety<br> Full of anxiety<br> No one to point at, question<br> Or even talk to — in his private grave<br> No matter what color<br> He wouldn’t be saved from hell<br> He dwells<br> A closed mind playing the part of prison cells<br> </p>",
        letra8: "<h4>Live In A Hole</h4> <p> Full of grief I scream at the wind<br> Thought I heard the words of others<br> Imprison myself<br> And stay in a shell<br> I won’t let you in to have a story to tell<br> Things tend to drag me down<br> Don’t understand so they hate me now<br> </p> <p> My fear grips the will of stone<br> My grip fears I’ll die alone<br> </p> <p> I promised myself somewhere in the teenage life<br> I’d never submit to the ones I will not be like<br> Live in a hole<br> But stay close to my kind<br> Cause they understand what burns in my mind<br> I still feel incomplete<br> Friends are few and far between<br> </p>",
        letra9: "<h4>Regular People (Conceit)</h4> <p> I’ve trampled on that road<br> That you think you own<br> You have that “smart ass” attitude<br> It’s time to stop the fiction<br> </p> <p> I live it every day<br> While your mind’s far away<br> I’m out here putting pride on the line<br> And you case on me with pure respect<br> One chance at one thing<br> Hard time is coming<br> My time, your pain<br> I reign on you<br> </p> <p> You think you own<br> I take away<br> Take it with me<br> You think you own<br> I took away<br> Made it my own<br> </p> <p> Most regular people would say it’s hard<br> And any streetwise son of a bitch knows<br> Don’t fuck with this<br> </p> <p> The so many times<br> You practice in your mirror<br> To be just like me<br> But you just can’t see<br> You ain’t got the balls, son<br> </p> <p> I fight for love of brother<br> Your friends fight one another<br> You can’t see because your head’s up your ass<br> And just in case you think you’re bad<br> I crush your rush<br> I rule YOU fool<br> I’m immovable stone in your world of weak — I speak<br> </p>",
        letra10: "<h4>By Demons Be Driven</h4> <p> Serving the faith<br> Abduction the oath<br> It lie in wait for the offering<br> Religion is old<br> For drawing the young<br> Purity withers and dies<br> Never return to the ones that provided<br> Children draining parents of will<br> I hold out my hand to bloodless child<br> I’m taken by the one I was saving<br> From death<br> </p> <p> By demons be driven<br> Beckon the call<br> </p> <p> With decline in mind<br> End not far<br> We’re left hanging alone here<br> He pulls us from nails<br> Shatters our bones<br> Leaving us crippled and strewn<br> Boiling my corpse in the blood of his children<br> Praying for his god to prevail<br> Burying us with loved ones<br> To sleep with shelled children of the sixth dimension<br> </p>",
        letra11: "<h4>Hollow</h4> <p> What’s left inside him?<br> Don’t he remember us?<br> Can’t he believe me?<br> We seemed like bothers<br> Talked for hours last month<br> About what we wanna be<br> I sit now with his hand in mine<br> But I know he can’t feel…<br> </p> <p> No one knows<br> What’s done is done<br> It’s as if he were dead<br> </p> <p> I’m close with his mother<br> And she cries endlessly<br> Lord how we miss him<br> At least what’s remembered<br> It’s so important to make best friends in life<br> But it’s hard when my friend sits with blank expressions<br> </p> <p> No one knows<br> What’s done is done<br> It’s as if he were dead<br> </p> <p> He as hollow as I alone now<br> He as hollow as I alone<br> A shell of my friend<br> Just flesh and bone<br> There’s no soul<br> He sees no love<br> I shake my fists at skies above<br> Mad at God<br> </p> <p> He as hollow as I converse<br> I wish he’d waken from this curse<br> Hear my words before it’s through<br> I want to come in after you<br> My best friend<br> </p> <p> He as hollow as I alone<br> </p>",
    },
    album3: {
        letra1: "<h4>Strength Beyond Strength</h4> <p> There is nothing.<br> No education.<br> No family life to open my arms to.<br> You’d say that my job is today, yet gone tomorrow.<br> I’ll be broke in a gutter.<br> </p> <p> I know the opinion.<br> A broken record.<br> Fuck you and your college dream.<br> Fact is we’re stronger than all.<br> </p> <p> You’re working for perfect bodies,<br> perfect minds and perfect neighbors.<br> But I’m helping to legalize dope on your pristine streets<br> and I’m making a fortune.<br> </p> <p> You’re muscle and gall.<br> Naive at best.<br> I’m bone, brain and cock.<br> Deep down stronger than all.<br> </p> <p> A sad state of affairs.<br> A crippled America.<br> A pipe dream buttfucked.<br> Immune. Stronger than all.<br> </p> <p> A lament for a rookie officer, punk ass weak little lamb.<br> For the mob, truly, does rule at this particular time.<br> </p> <p> We’ve grown into a monster.<br> An arrogant, explosive motherfuck.<br> Hard as a rock. Shut like a lock.<br> Finally, the president in submission.<br> He holds out his hand on your television and draws back a stump.<br> It’s too late for some, far too late.<br> </p> <p> No more holdbacks. No more paying a cops paycheck.<br> Let him bust his own child.<br> The son that heeds my word and smokes my dope.<br> The daughter that sucks me off and snorts cheap anything.<br> </p> <p> Hail Kings.<br> The new Kings.<br> Stronger than all.<br> </p> <p> A simple process to legalize.<br> There would not be a choice but to take our side.<br> Be there no question of certain strengths.<br> Know this intention.<br> Forever stronger than all.<br> </p>",
        letra2: "<h4>Becoming</h4> <p> A long time ago I never knew myself.<br> Then the memory of shame birthed its gift.<br> </p> <p> No more. The small one, the weak one, the frightened one.<br> Running from beatings, deflating.<br> I’m becoming more than a man.<br> More than you ever were.<br> Driven and burning to rise beyond Jesus.<br> </p> <p> I’m born again with snakes eyes<br> Becoming Godsize<br> </p> <p> I found my life was slipping through my hands.<br> Perhaps through death my life won’t be so bad.<br> </p> <p> I can see you, can fuck you, inside of you.<br> Staring through your eyes.<br> Belittle your friends to serve me, to suck me,<br> To realize my saving grasp.<br> I of suicide.<br> I the unlord.<br> </p> <p> I’m born again with snakes eyes<br> Becoming Godsize<br> </p>",
        letra3: "<h4>5 Minutes Alone</h4> <p> I see you had your mind all made up<br> you group of pitiful liars.<br> Before I woke to face the day,<br> your master plan transpired.<br> Something told me<br> this job had more to meet the eye.<br> My song is not believed?<br> My words somewhat deceiving?<br> Now I’m unwhole.<br> </p> <p> You’ve waged a war of nerves<br> But you can’t crush the kingdom<br> Can’t be what your idols are.<br> Can’t leave the scar.<br> You cry for compensation.<br> I ask you please just give us…<br> 5 minutes alone<br> </p> <p> I read your eyes, your mind was made up.<br> You took me for a fool.<br> You used complexion of my skin<br> for a counter racist tool.<br> You can’t burn me<br> I’ve spilled my guts out in the past.<br> Taken advantage of<br> because you know where I’ve come.<br> My past.<br> </p> <p> I ask you please just give us<br> </p>",
        letra4: "<h4>I’m Broken</h4> <p> I wonder if we’ll smile in our coffins<br> while loved ones mourn the day,<br> the absence of our faces,<br> living, laughing, eyes awake.<br> Is this too much for them to take?<br> </p> <p> Too young for one’s conclusion, the lifestyle won.<br> Such values you taught your son.<br> That’s how.<br> </p> <p> Look at me now.<br> I’m broken.<br> Inherit my life.<br> </p> <p> One day we all will die, a cliched fact of life.<br> Force fed to make us heed.<br> Inbred to sponge our bleed.<br> Every warning, a leaking rubber,<br> a poison apple for mingled blood.<br> </p> <p> Too young for one’s delusion the lifestyle cost<br> Venereal Mother embrace the loss.<br> That’s how<br> </p> <p> Look at you now.<br> You’re broken<br> Inherit your life.<br> </p>",
        letra5: "<h4>Good Friends And A Bottle Of Pills</h4> <p> I fucked your girlfriend last night.<br> While you snored and drooled, I fucked your love.<br> She called me Daddy.<br> And I called her baby when I smacked her ass.<br> I called her sugar when I ate her alive till daylight.<br> And I slept with her all over me,<br> from forehead to ribcage I dripped her ass.<br> Sometimes I thought you might be spying,<br> living out some brash fantasy, but no.<br> You were knocked out.<br> But we were all knocked out you know.<br> In a way<br> </p> <p> I serve too many masters.<br> </p> <p> We didn’t know you’d break the bottle<br> that the magic came in to use those jagged shards<br> to cut our wrists and neck.<br> And you’d do it too, you’re that kind of dude.<br> But you wouldn’t know what you were doing<br> because I didn’t,<br> your girlfriend could have been a burn victim,<br> an amputee, a dead body.<br> But god damn I wanted to fuck.<br> </p> <p> I’m losing what’s left of my fucking mind,<br> I serve too many fucking masters.<br> </p> <p> (I told you. I told you motherfucker)<br> </p>",
        letra6: "<h4>Hard Lines, Sunken Cheeks</h4> <p> As a child I was given the gift to entertain you. But through blood I inherited a life that could destroy you. </p> <p> I drink all day. I smoke all day. I took your daughters breath away. I’ve done it all but tap the vein. These hard lines and sunken cheeks are text book reasons All these Christians come alive and try to sell you </p> <p> My soul for a goat, yet I’ll outlive the old. </p> <p> You know it’s bad, some may say sad, a hangover is inspiration. Like a junkie I hurt for it. A bad trip, the emptiness. </p> <p> I never sleep, or always sleep a lack of fulfillment to me is me. The big picture. These hard lines and sunken cheeks are part of what the Christians mean to immortalize my situation. </p> <p> My soul for a goat. Yet I’ll outlive the old. </p> <p> Embrace some religion. To get close to some undivine ejaculation point. Simply to thy ghost I cling. Simply to thy ghost I reject. Simply to thy ghost I give spit. </p> <p> Tempter, tempting, tempt me. Molest me. You know that I’ll submit. For this is my weakness and it saves me from relationships With those Christians you know they’ll sell you </p> <p> my soul for a goat. Yet I’ll outlive the old. </p>",
        letra7: "<h4>Slaughtered</h4> <p> One’s own Kingman, Christ person, Woman God. At battle with a mass astrengent. The bond that blends the weak to the wise. </p> <p> It’s a safe assumption that you’d want to save me now. But I’ll never face castration. For your sacred sow is left </p> <p> slaughtered. </p> <p> Brainwashed by me. Myself influence I. Bird brained World saver. A fake god rests dead inside you. </p> <p> It’s a safe assumption that you’d want to save me now. But I’ll never face castration. For your sacred sow is left </p> <p> Slaughtered. </p> <p> System destroyed. Exposed and unployed. The fruit of intention cry for their dead, but turning their head to ignore reality’s claw. Knife to your wrist, syringe in your arm is your ounce of prevention. Give what you made, And under your name on your grave, is salvation. </p> <p> A big fucking joke. </p> <p> Slaughter the pig, the self righteous king for your own restoration. God is in your chest and faith kills what is precious, for death is unanswered. </p> <p> Slaughtered. </p> <p> Do sin [x4] </p>",
        letra8: "<h4>25 Years</h4> <p> I vent my frustration at you old man,<br> after years your ears will hear.<br> </p> <p> You screamed you tried,<br> it’s words of a weakling<br> and promises made by a liar, drunken liar.<br> </p> <p> Now you pick up that splintered chair,<br> that was aiming for your head.<br> </p> <p> A head that should have been long ago kicked in by me.<br> Alone.<br> </p> <p> I won’t lose a second of sleep for this…<br> </p> <p> Don’t touch me.<br> No!<br> Ever again<br> Don’t touch me<br> Don’t touch me<br> Don’t touch me<br> </p> <p> Orphaned to the dope and drinks,<br> I learned my lesson well, somehow from you.<br> </p> <p> No tears. Can’t clutch my regrets.<br> But these years of detachment<br> have left me with demons now surfacing.<br> I’m becoming more than nothing.<br> </p> <p> You never knew the answers to any of my questions, did you?<br> You made up all the answers to my unimportant existence.<br> </p> <p> But now you don’t have to dump me off,<br> </p> <p> Not again<br> Don’t touch me<br> Don’t touch me<br> Don’t touch me<br> Fuck, no!<br> </p> <p> Ever again<br> Don’t touch me<br> Don’t touch me<br> Don’t touch me<br> Fuck, no!<br> Don’t touch me<br> Never again<br> </p> <p> I vow, lest I die tomorrow…<br> </p> <p> You’ll never be the father I am.<br> The bastard father to the thousands<br> of the ugly, criticized, the unwanted.<br> The ones with fathers just like you.<br> We’re fucking you back.<br> </p> <p> I’m shoving my life right down your throat.<br> Can I find the guts?<br> Can I feel the heart?<br> Look at the ground as you choke me up,<br> does it taste like tequila?<br> Or failure?<br> </p> <p> We’re fucking you back<br> Fucking you back<br> We’re fucking you back<br> Fucking you back<br> </p>",
        letra9: "<h4>Shedding Skin</h4> <p> I don’t want you to look at me while<br> I’m shedding skin.<br> I can’t afford for you to see what’s in.<br> I’d rather shoot myself than have you watch me.<br> I feel you’d steal my skin to try and wear me.<br> </p> <p> I was betrayed, one more day of my short life.<br> You were carried away. You had no shame.<br> To suffocate my being.<br> I was me, but you weren’t you.<br> You were sticking to me like a scab…<br> so I peeled you away, and bled for days.<br> Then stepped out of myself.<br> </p> <p> I’m shedding skin, changing within, I’m falling in.<br> Through swollen eyes, I dreamed you died, caught inside.<br> I’m shedding skin, spreading thin, severed stem.<br> I created the end, I’m killing a friend. I’m shedding my skin.<br> </p> <p> I don’t think you belong in here,<br> I feel I’m sick.<br> Don’t ask because you know damn well where I’ve been.<br> I’ve kept a simple woman through the thick and thin.<br> But I’ve found the guts to sever from my Siamese twin.<br> </p> <p> I throw you away. Everyday. A dead part of life.<br> Strangling back. Seething black.<br> In between my longing for torture.<br> Blood on my face that came from your face.<br> The mix of kissing and bleeding.<br> I put you away. I shut you away.<br> I pissed you away. I threw you away.<br> </p> <p> I’m shedding skin, changing within, I’m falling in.<br> Through swollen eyes, I dreamed you died, caught inside.<br> I’m shedding skin, spreading thin, severed stem.<br> I created the end, I’m killing a friend. I’m shedding my skin.<br> </p> <p> You’re fucking, and sucking.<br> You’re friendless. It’s endless.<br> Your flower has soured.<br> It’s endless. You’re friendless.<br> It’s harder. And stronger.<br> But no one’s been inside you longer.<br> Or harder. Or deeper.<br> To get you off, you need the fear.<br> </p> <p> It’s never love. Bloody touch.<br> Broken wrist. Needle rust.<br> Choking throat. Swallowed teeth.<br> Head fuck. No peace.<br> I’m shedding my skin to peel you off of me.<br> You’ve got to love me.<br> </p> <p> Ornament. Shrunken head.<br> Playtoy. Snake strike.<br> Poisonous. Syphilis.<br> Drenched me. Soaked me.<br> I’m shedding my skin to drain you out of me.<br> You’ve got to hate me.<br> </p>",
        letra10: "<h4>Use My Third Arm</h4> <p> Enlight your sense of thought, of touch,<br> of real, a shield, an underground for this coward.<br> Building a blood in water scent.<br> It’s like some raping,<br> without judgement.<br> Boy in a pocket.<br> Balls in a bag.<br> Serve and protect you.<br> His dick his gun, his brain his badge.<br> </p> <p> A faster way to kill them all would take too goddamn long.<br> Absorb through pores the great escape.<br> </p> <p> Kill that fuck to show him up.<br> Equal his displeasure now.<br> Stab his ass, a reminded past of what the fuck we live for.<br> </p> <p> Ourselves.<br> </p> <p> Arm yourself. A branch. A third arm.<br> Extend your health, crawl inside euphoria.<br> Building a blood in water scent.<br> It’s like a scraping. It’s entrapment.<br> Boy in a pocket.<br> Balls in a bag.<br> Perverted handle.<br> His getting by is a fisted fuck.<br> </p> <p> A faster way to exterminate them takes too fucking<br> long. Absorb through pores the great escape.<br> </p> <p> Kill that fuck to show him up.<br> Equal his displeasure now.<br> Stab his ass, a reminded past of what the fuck we live for.<br> </p> <p> Ourselves.<br> </p> <p> Half-assed for most his life.<br> Piss poor little ham.<br> Narc boy a fake fuck limp dick.<br> Sucking up to the man.<br> And the world.<br> We need a fucking cold war.<br> </p> <p> Building a blood in water scent<br> It’s like a raping<br> Without judgement<br> Boy in a pocket<br> Balls in a bag<br> Perverted handle<br> His dick his gun, his brain his badge<br> </p> <p> Kill that fuck to show him up<br> Equal your displeasure now<br> Stab his ass a reminded past of what the fuck we’re living for<br> </p> <p> Our fucking selves!<br> </p>",
        letra11: "<h4>Throes Of Rejection</h4> <p> This is feeding what I am.<br> </p> <p> It’s like salt poured into a deep, infected wound.<br> It’s the type of pain you really dig and long for.<br> I’ve always been insecure to open up and show love.<br> Some pretty girl with long hair, some bald guy writhing.<br> </p> <p> Rejection…<br> </p> <p> The kind that’s self induced.<br> The tongue that’s bitten through.<br> The nauseating stab.<br> Is feeding what I am.<br> </p> <p> A short fuse.<br> </p> <p> If there really is a god, then it’s punishing me constantly.<br> She let me taste that sugarhole and of course, I wanted more.<br> But no. I’m reduced to a Rohypnol snort and a lot of drinks.<br> This shit goes on and on. Just look down my pants.<br> </p> <p> Rejection…<br> It ain’t a fucking game.<br> My human dick to blame.<br> A sociopathic plan.<br> Is feeding what I am.<br> </p> <p> Rejection…<br> Takes life away from eyes.<br> Will give you to the skies.<br> It makes me more than a man.<br> Is drowning what I am.<br> </p>",
        letra12: "<h4>Planet Caravan</h4> <p> We sail through endless skies<br> Stars shine like eyes<br> The black night sighs<br> </p> <p> The moon in silver trees<br> Falls down in tears<br> Light of the night<br> </p> <p> The earth, a purple blaze<br> Of sapphire haze<br> In orbit always<br> </p> <p> While down below the trees<br> Bathed in cool breeze<br> Silver starlight breaks down the night<br> </p> <p> And so we pass on by the crimson eye<br> Of great god Mars<br> As we travel the universe<br> </p>"
    },
    album4: {
        letra1: "<h4>The Great Southern Trendkill</h4> <p> It’s wearing on my mind,<br> I’m speaking all my doubts aloud<br> You rob a dead mans grave,<br> Then flaunt it like you did create<br> </p> <p> If I hit bottom and everythings gone<br> In the great Mississippi, please drown me and run<br> </p> <p> It’s digging time again,<br> you’re nurturing the weakest trend<br> </p> <p> Those with the heart and the brain to get past this<br> Can spot a pathetic without even asking<br> </p> <p> Fuck your magazine,<br> and fuck the long dead plastic scene<br> Pierce a new hole,<br> if Hell was “in” you’d give your soul<br> </p> <p> THE GREAT SOUTHERN TRENDKILL<br> That’s right,<br> THE GREAT SOUTHERN TRENDKILL<br> </p> <p> Buy it at a store,<br> from MTV to on the floor<br> You look just like a star,<br> it’s proof you don’t know who you are<br> </p> <p> If I hit bottom and everythings gone<br> In the great Mississippi, please drown me and run<br> </p> <p> It’s bullshit time again,<br> you’ll save the world within your trend<br> </p> <p> Those with the heart and the brain to get past this<br> Can spot a pathetic without even asking<br> </p> <p> Politically relieved,<br> you’re product sold and well received<br> The right words spoken gold,<br> if I was God you’d sell your soul to…<br> </p> <p> THE GREAT SOUTHERN TRENDKILL<br> That’s right,<br> THE GREAT SOUTHERN TRENDKILL<br> </p>",
        letra2: "",
        letra3: "",
        letra4: "",
        letra5: "",
        letra6: "",
        letra7: "",
        letra8: "",
        letra9: "",
        letra10: "",
        letra11: "",
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
    },
    album2: {
        song1: "662875",
        song2: "662877",
        song3: "662879",
        song4: "662881",
        song5: "662883",
        song6: "662885",
        song7: "662888",
        song8: "662890",
        song9: "662893",
        song10: "662895",
        song11: "662896"
    },
    album3: {
        song1: "662901",
        song2: "662904",
        song3: "662907",
        song4: "662909",
        song5: "662911",
        song6: "662914",
        song7: "662915",
        song8: "662916",
        song9: "662918",
        song10: "662920",
        song11: "662922",
        song12: "662924"
    },
    album4: {
        song1: "671018",
        song2: "671020",
        song3: "671022",
        song4: "671024",
        song5: "671026",
        song6: "671029",
        song7: "671031",
        song8: "671034",
        song9: "671036",
        song10: "671038",
        song11: "671041"
    }
}

// Player (Reprodutor de Áudio) do Deezer

const configPlayer = {
    format: "square",  // Formato do player
    autoplay: "false",  // Tocar automaticamente
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
        case "vulgar1":
            player.src = putID(songs.album2.song1)
            letrasSpan.innerHTML = letras.album2.letra1
            break
        case "vulgar2":
            player.src = putID(songs.album2.song2)
            letrasSpan.innerHTML = letras.album2.letra2
            break
        case "vulgar3":
            player.src = putID(songs.album2.song3)
            letrasSpan.innerHTML = letras.album2.letra3
            break
        case "vulgar4":
            player.src = putID(songs.album2.song4)
            letrasSpan.innerHTML = letras.album2.letra4
            break
        case "vulgar5":
            player.src = putID(songs.album2.song5)
            letrasSpan.innerHTML = letras.album2.letra5
            break
        case "vulgar6":
            player.src = putID(songs.album2.song6)
            letrasSpan.innerHTML = letras.album2.letra6
            break
        case "vulgar7":
            player.src = putID(songs.album2.song7)
            letrasSpan.innerHTML = letras.album2.letra7
            break
        case "vulgar8":
            player.src = putID(songs.album2.song8)
            letrasSpan.innerHTML = letras.album2.letra8
            break
        case "vulgar9":
            player.src = putID(songs.album2.song9)
            letrasSpan.innerHTML = letras.album2.letra9
            break
        case "vulgar10":
            player.src = putID(songs.album2.song10)
            letrasSpan.innerHTML = letras.album2.letra10
            break
        case "vulgar11":
            player.src = putID(songs.album2.song11)
            letrasSpan.innerHTML = letras.album2.letra11
            break
        case "beyond1":
            player.src = putID(songs.album3.song1)
            letrasSpan.innerHTML = letras.album3.letra1
            break
        case "beyond2":
            player.src = putID(songs.album3.song2)
            letrasSpan.innerHTML = letras.album3.letra2
            break
        case "beyond3":
            player.src = putID(songs.album3.song3)
            letrasSpan.innerHTML = letras.album3.letra3
            break
        case "beyond4":
            player.src = putID(songs.album3.song4)
            letrasSpan.innerHTML = letras.album3.letra4
            break
        case "beyond5":
            player.src = putID(songs.album3.song5)
            letrasSpan.innerHTML = letras.album3.letra5
            break
        case "beyond6":
            player.src = putID(songs.album3.song6)
            letrasSpan.innerHTML = letras.album3.letra6
            break
        case "beyond7":
            player.src = putID(songs.album3.song7)
            letrasSpan.innerHTML = letras.album3.letra7
            break
        case "beyond8":
            player.src = putID(songs.album3.song8)
            letrasSpan.innerHTML = letras.album3.letra8
            break
        case "beyond9":
            player.src = putID(songs.album3.song9)
            letrasSpan.innerHTML = letras.album3.letra9
            break
        case "beyond10":
            player.src = putID(songs.album3.song10)
            letrasSpan.innerHTML = letras.album3.letra10
            break
        case "beyond11":
            player.src = putID(songs.album3.song11)
            letrasSpan.innerHTML = letras.album3.letra11
            break
        case "beyond12":
            player.src = putID(songs.album3.song12)
            letrasSpan.innerHTML = letras.album3.letra12
            break
        case "trendkill1":
            player.src = putID(songs.album4.song1)
            letrasSpan.innerHTML = letras.album4.letra1
            break
        case "trendkill2":
            player.src = putID(songs.album4.song2)
            letrasSpan.innerHTML = letras.album4.letra2
            break
        case "trendkill3":
            player.src = putID(songs.album4.song3)
            letrasSpan.innerHTML = letras.album4.letra3
            break
        case "trendkill4":
            player.src = putID(songs.album4.song4)
            letrasSpan.innerHTML = letras.album4.letra4
            break
        case "trendkill5":
            player.src = putID(songs.album4.song5)
            letrasSpan.innerHTML = letras.album4.letra5
            break
        case "trendkill6":
            player.src = putID(songs.album4.song6)
            letrasSpan.innerHTML = letras.album4.letra6
            break
        case "trendkill7":
            player.src = putID(songs.album4.song7)
            letrasSpan.innerHTML = letras.album4.letra7
            break
        case "trendkill8":
            player.src = putID(songs.album4.song8)
            letrasSpan.innerHTML = letras.album4.letra8
            break
        case "trendkill9":
            player.src = putID(songs.album4.song9)
            letrasSpan.innerHTML = letras.album4.letra9
            break
        case "trendkill10":
            player.src = putID(songs.album4.song10)
            letrasSpan.innerHTML = letras.album4.letra10
            break
        case "trendkill11":
            player.src = putID(songs.album4.song11)
            letrasSpan.innerHTML = letras.album4.letra11
            break
        default:
            console.log("Valor Inválido")
            break
    }
}))