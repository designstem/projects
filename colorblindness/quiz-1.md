

| style: text-align: center;
| rows: 40vh 20vh auto
| 1
| 2
| 3

{{ set('q1', {answers: [['A. Osmoreceptors', false], ['B. Baroreceptors', false], ['C. Photoreceptors', true], ['D. Chemoreceptors', false]], hint:'Clue: they detect light', status: false } ) }}
{{set('q1.status', 'undefined')}}

# Retina Quiz

## &nbsp;

### ~Rods and cones are receptors in the retina of the eye.<br />What type of receptor are they?~

-

<f-inline style="justify-content: space-between;">
    <div v-for="(b,i) in get('q1').answers" :key="'b'+i">
        <button href="#" 
            v-on:click.prevent="b[1] == true ? set( 'q1.status', true) : set( 'q1.status', false)" 
            class="button"
            :disabled="get('q1.status') == true ? true : false"
            :class="get('q1.status') == true && b[1] == true ? 'tertiary' : 'secondary'"
        >{{ b[0] }}</button>
    </div>
</f-inline>

-

<h2>{{ get('q1.status') == false ? 'TRY AGAIN!' : ' ' }}</h2>
<h4>{{ get('q1.status') == false ? get('q1').hint : ' ' }}</h4>

<f-next-button v-if="get('q1.status') == true" title="WELL DONE! Next question" />

---





| style: text-align: center;
| rows: 2fr 1fr 1fr
| 1
| 2
| 3

{{ set('q1', {answers: [['A. Bleaching', true], ['B. Neutralisation', false], ['C. Hydrolysis', false], ['D. Condensation', false]], hint:'Clue: they detect light', status: false } ) }}
{{set('q1.status', 'undefined')}}

# Question 2


#### ~Rods & cones contain light-sensitive pigments which undergo a chemical change when they absorb light.<br /> What is this chemical change called?~

-

<f-inline style="justify-content: space-between;">
    <div v-for="(b,i) in get('q1').answers" :key="'b'+i">
        <button href="#" 
            v-on:click.prevent="b[1] == true ? set( 'q1.status', true) : set( 'q1.status', false)" 
            class="button"
            :disabled="get('q1.status') == true ? true : false"
            :class="get('q1.status') == true && b[1] == true ? 'tertiary' : 'secondary'"
        >{{ b[0] }}</button>
    </div>
</f-inline>

-

<h2>{{ get('q1.status') == false ? 'TRY AGAIN!' : ' ' }}</h2>
<h4>{{ get('q1.status') == false ? get('q1').hint : ' ' }}</h4>

<f-next-button v-if="get('q1.status') == true" title="WELL DONE! Next question" />
