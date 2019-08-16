| style: text-align: center;
| rows: 40vh auto
| 1
| 2

# Retina Quiz

## &nbsp;

### ~Rods and cones are receptors in the retina of the eye.<br />What type of receptor are they?~

<f-value :value="{answers: [['A. Osmoreceptors', false, 'NOT QUITE'], ['B. Baroreceptors', false, 'TRY AGAIN'], ['C. Photoreceptors', true, 'WELL DONE!'], ['D. Chemoreceptors', false, 'SORRY, NO...']], hint:'Clue: they detect light', status: false}" set="q1" />

{{set('q1.index', 'undefined')}}
{{set('q1.correct', 'C. Photoreceptors')}}
{{set('q1.status', false)}}

-

<f-inline style="justify-content: space-between;">
    <div v-for="(b,i) in get('q1').answers" :key="'b'+i">
        <button href="#" 
            v-on:click.prevent="() => { set( 'q1.index', i); set( 'q1.status', b[1]);  }" 
            class="button"
            :disabled="get('q1.status') == true ? true : false"
            :class="[get('q1.correct') == b[0] && get('q1.index') == i ? 'tertiary' : 'secondary', get('q1.index')== i && get('q1.status') == false ? 'quaternary' : '']" 
        >{{ b[0] }} </button>
    </div>
</f-inline>

### &nbsp;

<!-- <h2>{{ get('q1.status') == false ? get('q1').answers[get('q1.index')][2] : ' ' }}</h2> -->
<h2>{{ get('q1.index') == 'undefined' ? 'CHOOSE ANSWER' : get('q1').answers[get('q1.index')][2] }}</h2>
<h5 v-if="get('q1.status') == false">{{ get('q1.index') != 'undefined' ? get('q1').hint : ' ' }}</h5>

<f-next-button v-if="get('q1.status') == true" title="Next question" />

---









| style: text-align: center;
| rows: 40vh auto
| 1
| 2

# Question 2

#### ~Rods & cones contain light-sensitive pigments which undergo a chemical change when they absorb light.<br /> What is this chemical change called?~


<f-value :value="{answers: [['A. Bleaching', true, 'RIGHT YOU ARE!'], ['B. Neutralisation', false, 'NOT QUITE'], ['C. Hydrolysis', false, 'SORRY, NO...'], ['D. Condensation', false, 'TRY AGAIN']], hint:'Clue: the pigments become colourless when they undergo this chemical change.', status: false}" set="q1" />

{{set('q1.index', 'undefined')}}
{{set('q1.correct', 'A. Bleaching')}}
{{set('q1.status', false)}}

-

<f-inline style="justify-content: space-between;">
    <div v-for="(b,i) in get('q1').answers" :key="'b'+i">
        <button href="#" 
            v-on:click.prevent="() => { set( 'q1.index', i); set( 'q1.status', b[1]);  }" 
            class="button"
            :disabled="get('q1.status') == true ? true : false"
            :class="[get('q1.correct') == b[0] && get('q1.index') == i ? 'tertiary' : 'secondary', get('q1.index')== i && get('q1.status') == false ? 'quaternary' : '']" 
        >{{ b[0] }} </button>
    </div>
</f-inline>

### &nbsp;

<!-- <h2>{{ get('q1.status') == false ? get('q1').answers[get('q1.index')][2] : ' ' }}</h2> -->
<h2>{{ get('q1.index') == 'undefined' ? 'CHOOSE ANSWER' : get('q1').answers[get('q1.index')][2] }}</h2>
<h5 v-if="get('q1.status') == false">{{ get('q1.index') != 'undefined' ? get('q1').hint : ' ' }}</h5>

<f-next-button v-if="get('q1.status') == true" title="Next question" />

---








| style: text-align: center;
| rows: 40vh auto
| 1
| 2

# Question 3

#### ~When light bleaches the photosensitive pigments in rods and cones, the energy released causes the membranes of rods & cones to become...~


<f-value :value="{answers: [['A. Less permeable to Na+ ions', false, 'NOT REALLY...'], ['B. Less permeable to K+ ions', false, 'NOT QUITE'], ['C. More permeable to K+ ions.', false, 'SORRY, NO...'], ['D. More permeable to Na+ ions', true, 'RIGHT YOU ARE!']], hint:'Clue: the entry of these ions causes depolarisation (the inside of the membranes become more positive)', status: false }" set="q1" />

{{set('q1.index', 'undefined')}}
{{set('q1.correct', 'D. More permeable to Na+ ions')}}
{{set('q1.status', false)}}


-

<f-inline style="justify-content: space-between;">
    <div v-for="(b,i) in get('q1').answers" :key="'b'+i">
        <button href="#" 
            v-on:click.prevent="() => { set( 'q1.index', i); set( 'q1.status', b[1]);  }" 
            class="button"
            :disabled="get('q1.status') == true ? true : false"
            :class="[get('q1.correct') == b[0] && get('q1.index') == i ? 'tertiary' : 'secondary', get('q1.index')== i && get('q1.status') == false ? 'quaternary' : '']" 
        >{{ b[0] }} </button>
    </div>
</f-inline>

### &nbsp;

<!-- <h2>{{ get('q1.status') == false ? get('q1').answers[get('q1.index')][2] : ' ' }}</h2> -->
<h2>{{ get('q1.index') == 'undefined' ? 'CHOOSE ANSWER' : get('q1').answers[get('q1.index')][2] }}</h2>
<h5 v-if="get('q1.status') == false">{{ get('q1.index') != 'undefined' ? get('q1').hint : ' ' }}</h5>

<f-next-button v-if="get('q1.status') == true" title="Next question" />