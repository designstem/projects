| padding: 0


<dl class="cb-menu" style="cursor:default;">
  
  <div :class="get('section') == 'bm-start' ? ['cb-menu__section', 'cb-menu__section--active'] : 'cb-menu__section'">
    <dt v-on:click.self="send('closemenu'); goto('bm-start')">Start</dt>
  </div>
  
  <div :class="get('section') == 'bm-explore' ? ['cb-menu__section', 'cb-menu__section--active'] : 'cb-menu__section'">
    <dt v-on:click="goto('bm-boroullec')">Explore biomimicry</dt>
    <dd v-on:click="goto('bm-boroullec')">Ronan and Erwan Bouroullec</dd>
    <dd v-on:click="goto('bm-munari')">Bruno Munari</dd>
    <dd v-on:click="goto('bm-velcro')">Velcro</dd>
    <dd v-on:click="goto('bm-davinci')">Da Vinci</dd>
    <dd v-on:click="goto('bm-colani')">Luigi Colani</dd>
    <dd v-on:click="goto('bm-lovegrove')">Ross Lovegrove</dd>
    <dd v-on:click="goto('bm-saraceno')">Tomás Saraceno</dd>
    <dd v-on:click="goto('bm-rechenberg')">Ingo Rechenberg</dd>
    <dd v-on:click="goto('bm-lodato')">Franco Lodato</dd>
  </div>

  <div :class="get('section') == 'bm-biodesign-lessons' ? ['cb-menu__section', 'cb-menu__section--active'] : 'cb-menu__section'">
    <dt v-on:click="goto('bm-biodesign-lessons')">Biodesign Lessons</dt>
    </div>

</dl>