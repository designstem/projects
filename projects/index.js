import {
  fachwerk,
  Vue,
  get,
  set
} from "https://designstem.github.io/fachwerk/fachwerk.js";

const FLogo = {
  template: `
  <big><big><big>
    <h1>
      <span style="color: var(--red); letter-spacing: -0.06ch;">Design</span><sup style="letter-spacing: -0.05ch; font-size: 0.5em">STEM</sup>
    </h1>  
  </big></big></big>
  `
};

const FGrid = {
  props: {
    cols: { default: "auto", type: [Number, String] },
    rows: { default: "auto", type: [Number, String] },
    gap: { default: "var(--base2)", type: [Number, String] }
  },
  computed: {
    style() {
      return {
        "--cols": this.cols,
        "--rows": this.rows,
        "--gap": this.gap
      };
    }
  },
  template: `
  <div class="grid" :style="style">
    <slot />
  </div>
  `
};

const FImageCard = {
  props: {
    src: { default: "", type: String, description: "Image URL" }
  },
  template: `
  <div 
    :style="{ 
      background: 'url(' + src + ')',
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      backgroundRepeat: 'no-repeat',
      height: '100%',
      minHeight: 'calc(var(--base) * 33)',
      position: 'relative',
    }"
    >
      <div :style="{
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        padding: 'var(--base2)',
        backgroundColor: 'rgba(0,0,0,0.65)',
        boxShadow: 'inset 0 0 30px 10px rgba(0,0,0,0.25)'
      }">
        <slot />
    </div>
    </div>
  `
};

const FTeam = {
  components: { FGrid },
  props: {
    team: { default: "", type: String },
    cols: { default: 13, type: [String, Number] }
  },
  data: () => ({
    currentTeam: -1
  }),
  methods: {
    filteredTeams(teams) {
      return this.team
        ? parseList(this.team).map(
            t => teams.filter(ts => ts.shortname === t)[0]
          )
        : teams;
    }
  },
  template: `
  <f-sheet id="1-WsazYAKboddKOCkfImHCY6V7Wy-ztIs4qhyYumeAqw" v-slot="{ value: allTeams }">
    <slot :teams="filteredTeams(allTeams)">
      <f-grid gap="0" :cols="'repeat(' + cols + ', 1fr)'">
        <template v-for="(t, i) in filteredTeams(allTeams)">
          <img
            :key="i"
            :src="t.filename"
            style="object-fit: cover;"
            :style="{ filter: currentTeam == i ? '' : 'brightness(50%)' }"
            @mouseover="currentTeam = i; $emit('team', t)"
            @touchstart="currentTeam = i; $emit('team', t)"
          />
        </template>
      </f-grid>
    </slot>
  </f-sheet>
  `
};

const FAbout = {
  components: { FTeam },
  props: {
    project: { default: {}, type: Object }
  },
  methods: { get, set },
  template: `
  <f-sidebar size="half">
    <button style="position: absolute; left: var(--base2); bottom: var(--base2);">About</button>
    <div slot="content" style="padding: var(--base3)">
      <h2>{{ project.title }}</h2>
      <f-inline v-if="project.time">
        <span><f-clock-icon duration2="15" /></span>
        <p style="opacity: 0.65">{{ project.time }}</p>
      </f-inline>
      <f-inline v-if="project.people">
        <span><f-people-icon /></span>
        <p style="opacity: 0.65">{{ project.people }}</p>
      </f-inline>
      <f-inline v-if="project.people">
        <span><f-tools-icon /></span>
        <p style="opacity: 0.65">{{ project.facilities }}</p>
      </f-inline>
      <!--p><big>{{ project.desc }}</big></p-->
      <a class="primary" style="--purple: var(--red); --darkpurple: var(--red);" :href="'./' + project.scenario">Go to scenario<f-rightarrow-icon /></a>
      <br><br>
      <f-embed :src="'../' + project.scenario + '/about.md'" />
      <br><br>
      <div v-if="project.team">
        <h3>Team</h3>
        <f-team cols="6" :team="project.team" @team="team => set('team', team)" />
        <h4>{{ get('team',{ name: '' }).name }}</h4>
        <p>{{ get('team',{ bio: '' }).bio }}</p>
        <p v-if="project.contact == get('team',{ shortname: '' }).shortname"><a href="mailto:">{{ get('team',{ contact: '' }).contact }}</a></p>
      </div>
      <br><br>
    </div>
  </f-sidebar>
  `
};

const parseList = (list, separator = ",") =>
  list.split(separator).map(l => l.trim());

fachwerk({
  title: "Projects",
  components: { FLogo, FGrid, FImageCard, FAbout, FTeam },
  editor: "none",
  type: "document",
  menu: false,
  pager: false,
  style: { "--image-min-height": "100px", "--content-padding": "var(--base8)" }
});
