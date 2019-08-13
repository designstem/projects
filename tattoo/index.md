| rows: 1fr 4fr 1fr
| style: --primary: white
| 1 1
| 2 4
| 3 4

<Background />

-

# <big><big>Smart Tattoos</big></big>

<big>Design a biosensitive tattoo that expresses you life and can also save your life</big>

-

<f-next-button title="Start" />

---

### Learning goals

* To promote interest towards learning both design and STEM

* To support creativity by illustrating how ideas across different subjects feed each other 

* To learn about concepts in skin biology, indicator chemistry and icon design

---

| rows: auto 1fr
| padding: 0
| 1 2
| 1 2

<div style="padding:var(--content-padding);">

# What is smart tattoo?

~Tattoos have been around since ancient times.~

~They are done by punctuating the skin with a needle that injects ink under the skin.~

~Now MIT-research group has suggested that some inks can be used to create smart tattoo’s that provide useful information about **hydration, sugar and pH-levels**.~

<big>Work in a pair and design a "smart" tattoo<big>

</div>

-

<f-image src="images/art-artist-drawing-1304469.jpg" />


---

| rows: auto 1fr
| padding: 0
| 1 2
| 1 2

<section style="padding:var(--content-padding);">



<f-icon-heading></f-icon-heading>
# Warming up

~Tattooing is all about drawing images on the skin. These images are not always easy to recognize~

<span class="bullet">1</span> Find a partner

<span class="bullet">2</span> Select a concept and "tattoo" it to your partner’s back by gently tapping with a finger

<span class="bullet">3</span> Try to guess the concept tattooed in your/your partner's back

<span class="bullet">4</span> Discuss: what kind of concepts are easy to “guess” from limited information

</section>

-

<f-image style="background-position: 40%" src="images/bags-best-friends-daylight-1516440.jpg" />

---

<center style="flex-direction: column">

# 🧪

## What to measure? 
The MIT-researchers used inks that functioned as indicators. 
Indicators are substances that provide useful information about their environment.
For example, information about acids and bases.

</center>

---

| rows: auto 1fr
| padding: 0
| 1 1 1 1 4 4
| 2 2 2 3 4 4

<div style="padding: var(--content-padding) var(--content-padding) 0 var(--content-padding);">

# Acids and bases

</div>

-

<div style="padding: 0 var(--content-padding);">

The acids and bases can be understood through the concentration of hydrogen-ion <f-math inline blue>(H+)</f-math> in a solution.

The acid level is measured with pH-scale (pH originally comes from the power of hydrogen).

pH-scale governed by the equation <f-math inline>pH = -log[H+]</f-math>

&nbsp;

<f-slider set="ph" :value=7 :to=14 integer title="ph: "  />

&nbsp;

*Move the bar to explore the pH-scale. Talk with a friend: What is the pH-range that you would need to consider with tattoos?*

</div>

-

<div style="display: flex; align-items: center; flex-direction: column; position: relative">
  <f-artboard :width="280" :height="350" :step="20" style="margin-top: 5px" >
  	<f-line :x1="40" :y1="310 - i*20" :x2="240" :y2="310 - i*20" v-for="i in 15" />
    <f-rect style="transition: all .2s ease-in-out" :x="-100" :y="-290" :stroke="none" :fill="color('red')" :width="40" :height="280 - get('ph')*20" :rotation="180"/>
    <f-rect style="transition: all .2s ease-in-out" :x="-220" :y="-290" :stroke="none" :fill="color('blue')" :width="40" :height="get('ph')*20" :rotation="180"/>
    <f-text :x="20" :y="313 - i*20" v-for="i in 15">{{i-1}}</f-text>
  </f-artboard><br>
  <small style="position: absolute; bottom: 40px; left: 40px">
    <small>
      <f-math inline :update="get('ph')">
      [H+] = 10^{(-{{ get('ph') }})}
      </f-math>
    </small>  
  </small>
  <small style="position: absolute; bottom: 40px; right: 20px">
    <small>
      <f-math inline :update="get('ph')">
      [OH-] = 10^{({{ 14 - get('ph') }})}
      </f-math>
    </small>
  </small>
</div>

<f-notes title="attributions">
https://www.pexels.com/photo/body-of-water-under-blue-and-white-skies-1533720/
https://www.pexels.com/photo/nature-water-blue-abstract-67843/
https://www.pexels.com/photo/flour-in-a-jar-5765/
https://www.pexels.com/photo/chrome-circle-close-up-droplets-220612/
https://commons.wikimedia.org/wiki/File:Clorox_Bleach_products.jpg
https://www.flickr.com/photos/yourbestdigs/28692193236
https://www.flickr.com/photos/horiavarlan/4263958356
https://pixabay.com/photos/tums-pills-tablets-antacid-1528834/
https://www.maxpixel.net/Inflammation-Urine-Container-Urine-The-Test-1006795
https://www.pexels.com/photo/happy-coffee-6347/
https://www.pexels.com/photo/tomato-shake-being-poured-in-drinking-glass-1365445/
https://www.pexels.com/photo/close-up-photo-of-cold-cola-1571700/
https://www.pexels.com/photo/close-up-photo-of-sliced-lemons-1536871/
https://commons.wikimedia.org/wiki/File:Adult_Digestive_System.png
https://www.needpix.com/photo/download/656916/offal-marking-medical-intestine-liver-small-intestine-colon-belly-human
https://www.maxpixel.net/Motorcycle-Battery-Battery-Acid-Battery-2490122
https://pxhere.com/en/photo/977978
</f-notes>

-

<div style="position: relative; height: 100%">
<big style="
color: var(--white); 
z-index: 1; 
padding: var(--content-padding); 
position: absolute; 
bottom: 0; 
left: 0; 
right: 0;
background: linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,0.65) 100%);
">{{ ['Battery acid','Stomach acid','Lemon juice','Soda','Tomato juice','Black coffee','Urine (average)','Pure water','Seawater','Baking Soda','Antacid tablets','Soap','Ammonia','Bleach','Drain cleaner'][get('ph')] }}</big>
<f-image style="z-index: -1; position: absolute; left: 0; top: 0; bottom: 0; right: 0; background-position: center center; background-size: cover" :src="'images/ph/' + get('ph') + '.jpg'" />
</div>

---

| rows: auto 1fr
| 1 1 1
| 2 3 4

<f-icon-heading>Class activity</f-icon-heading>

# Design a smart tattoo

-

<big><span class="bullet">1</span> Discuss with your pair what substances exist in human body and how do these influence human health.</big>

-

<big><span class="bullet">2</span> Choose which one you want to measure and why.</big>

-

<big><span class="bullet">3</span> When you have decided open a paint and draw a quick black and white icon of what you want to measure.   

Visit the icon designer to learn more about icons and make adjustments to your icon if necessary.</big>

<a class="primary" href="../tattoo_icons">Go to icon designer</a>

---

| rows: auto 1fr
| 1 1 1
| 2 3 4

<f-icon-heading>Class activity</f-icon-heading>

# Test your design

-

<big><span class="bullet">1</span> There are biological and chemical factors that you might want to take into account in your smart tattoo design.</big>

-

<big><span class="bullet">2</span> Compare the word lists you wrote  earlier and tape them into each other. Think and draw the possible connections between these words.</big>

-

<big><span class="bullet">3</span> Test your design in smart tattoo simulator to explore further connections. Write these down as well.</big>

<f-next-button title="Go to the simulator" />

---

| padding: 1vw

<Simulator />

---

| rows: auto 1fr auto
| 1 1
| 2 3
| 4 4

# Share your ideas

-

<big>With the assistance of your paper share your ideas about your design and smart tattoos in general.</big>

<big>What are the critical scientific concepts a tattoo designer needs to bear in mind?</big>

-

-

<a class="tertiary" href="..">← Back to projects</a>
