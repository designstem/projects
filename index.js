import {
  fachwerk,
  Vue,
  Css,
  get,
  set,
  flatten,
  unique,
  titlecase
} from "https://designstem.github.io/fachwerk/fachwerk.js";

const parseList = (list, separator = ",") =>
  list.split(separator).map(l => l.trim());

const FLogo = {
  mixins: [Css],
  template: `
  <big><big><big>
    <h1 class="ds-logo">
      <span style="color: var(--red); letter-spacing: -0.06ch;">Design</span><sup style="letter-spacing: -0.05ch; font-size: 0.5em">STEM</sup>
    </h1>  
  </big></big></big>
  `,
  css: `
  @media (max-width: 800px) {
    .ds-logo {
      --base: 2vw;
    }
  }
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
        display: 'grid',
        'grid-template-rows':'60px auto 40px',
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
      <f-grid gap="0" :cols="'repeat(' + cols + ', 1fr)'" style="--mobile-cols:1fr 1fr 1fr">
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
  methods: { get, set, titlecase },
  template: `
  <f-sidebar size="half">
    <a class="quaternary" style="position: absolute; left: var(--base2); bottom: var(--base2);">About</a>
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
      <a class="primary" style="--purple: var(--red); --darkpurple: var(--red);" :href="'./' + project.scenario">Go to project<f-rightarrow-icon /></a>
      <br><br>
      <f-embed :src="'./' + project.scenario + '/about.md'" />
      <br><br>
      <div v-if="project.team">
        <h3>Team</h3>
        <f-team cols="6" :team="project.team" v-slot="{ teams }">
          <f-grid cols="100px 1fr">
          <template v-for="(t, i) in teams">
            <img
              :key="i"
              :src="t.filename"
              style="object-fit: cover;"
            />
            <div>
              <h4>{{ t.name }}</h4>
              <p>{{ t.bio }}
                <template v-if="project.contact === t.shortname"><br><a :href="'mailto:' + t.contact">{{ t.contact }}</a></template>
              </p>
            </div>
          </template>
        </f-grid>
        </f-team>
        <h4>{{ get('team',{ name: '' }).name }}</h4>
        <p>{{ get('team',{ bio: '' }).bio }}</p>
        <p v-if="project.contact == get('team',{ shortname: '' }).shortname"><a href="mailto:">{{ get('team',{ contact: '' }).contact }}</a></p>
      </div>
      <br><br>
      <f-sheet
        id="1lX3zJ_3jYKIsIqeoFdPa3xPiVjBy4Avd8aHKefLUmOU"
        v-slot="{ value: terms }"
      >
      <div>
        <h3>Glossary</h3>
        <div v-for="row in terms.filter(t => t.scenario === project.scenario)">
          <big><var>{{ row.english }}</var></big>
          <f-table
            :rows="Object.entries(row)
              .filter(([key, value]) => key !== 'scenario' && key !== 'english')
              .map(([key, value]) => ({ language: titlecase(key), term: '<var>' + value + '</var>' }))"
          />
        </div>
      </div>
      </f-sheet>
    </div>
  </f-sidebar>
  `
};

const FTags = {
  props: ["projects", "type", "set"],
  methods: { getValue: get, setValue: set },
  computed: {
    tags() {
      const tags = unique(
        flatten(this.projects.map(p => parseList(p[this.type])))
      );
      return tags;
    }
  },
  template: `
  <f-fade style="display: flex; flex-wrap: wrap;">
    <a
      v-for="(t,i) in tags"
      :key="i"
      @click="setValue(set, t == getValue(set) ? '' : t)"
      style="margin: calc(var(--base) / 2); display: block; cursor: pointer"
      :style="{
        color: getValue(set) == t ? 'var(--red)': 'var(--gray)',
        borderBottom: getValue(set) == t ? '2px solid var(--red)': '2px solid var(--gray)'
      }"
    >{{ t }}</a>
  </f-fade>
  `
};

const isActive = (project, designtags, stemtags) => {
  if (designtags && stemtags) {
    return (
      project.designtags.includes(designtags) &&
      project.stemtags.includes(stemtags)
    );
  }
  if (designtags && !stemtags) {
    return project.designtags.includes(designtags);
  }
  if (!designtags && stemtags) {
    return project.stemtags.includes(stemtags);
  }
  return true;
};

fachwerk({
  title: "Projects",
  components: { FLogo, FGrid, FImageCard, FAbout, FTeam, FTags },
  utils: { isActive },
  editor: "none",
  menu: "none",
  type: "document",
  style: { "--image-min-height": "100px", "--content-padding": "var(--base8)" }
});
