| padding: none

<f-next-button title="Let's start" style="margin: var(--base8) 0;" />

## Content
 

### **1** Color theory

<div class="grid" style="--cols: 1fr 1fr 1fr; --gap: var(--base);">
    <div>
        <button v-on:click="send('goto', 'cbSimulator')">CB SIMULATOR</button> 
        <f-card v-on:click="send('goto', 'cbSimulator')" style="border: 0px solid var(--primary); font-weight: normal;" :color="color('white')" :background="color('purple')">Start here</f-card>
    </div>
    <div v-for="(s,i) in ['From bits to channels to colors','Color blindness and design','Message with matural dyes','Easing and stop motion', 'Bees and packaging']" :key="i">
        <f-card style="border: 0px solid var(--primary); font-weight: normal;" :color="color('yellow')">
            <h5 style="color: var(--darkgray);">{{ s }}</h5>
        </f-card>
    </div>
</div>