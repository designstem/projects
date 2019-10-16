import {
  fachwerk,
  get,
  range,
  polarx,
  polary
} from "https://designstem.github.io/fachwerk/fachwerk.js";

const FLetter = {
  template: `
    <path fill="var(--blue)" d="M65.5037 73.9071C63.0763 73.9071 61.0434 73.1481 59.405 71.6302C57.8272 70.1123 56.8259 68.0783 56.4011 65.5282H55.855C55.1268 68.6248 53.5187 70.9927 51.0307 72.6321C48.5426 74.2107 45.4781 75 41.8371 75C37.0431 75 33.3718 73.725 30.8231 71.1749C28.2744 68.6248 27 65.255 27 61.0656C27 56.0261 28.8205 52.292 32.4615 49.8634C36.1632 47.374 41.1696 46.1293 47.4807 46.1293H55.0358V43.1239C55.0358 40.8166 54.4289 38.9951 53.2153 37.6594C52.0016 36.2629 49.9687 35.5647 47.1166 35.5647C44.4465 35.5647 42.3226 36.1415 40.7448 37.2951C39.167 38.4487 37.8623 39.7541 36.8307 41.2113L28.8205 34.1075C30.7624 31.2538 33.1897 29.0376 36.1025 27.459C39.076 25.8197 43.0811 25 48.1179 25C54.9144 25 60.0118 26.4876 63.4101 29.4627C66.8084 32.4378 68.5075 36.779 68.5075 42.4863V63.4335H72.9677V73.9071H65.5037ZM46.8435 65.6193C49.0888 65.6193 51.0003 65.1336 52.5781 64.1621C54.2165 63.1906 55.0358 61.612 55.0358 59.4262V53.7796H48.482C43.2025 53.7796 40.5628 55.5707 40.5628 59.153V60.5191C40.5628 62.2799 41.1089 63.5853 42.2012 64.4353C43.2935 65.2246 44.8409 65.6193 46.8435 65.6193Z" />
  `
};

const FSource = {
  methods: { get },
  template: `
  <f-artboard dots v-slot="{ mouse }" width="150" height="150">
    <f-drag
      :mouse="mouse"
      step="25"
      points="50 50, 75 50, 100 50, 100 75, 100 100, 75 100, 50 100, 50 75"
      v-slot="{ points }"
      set="p"
    >
      <f-line :points="points" closed stroke fill="var(--white)" />
    </f-drag>
    <f-letter />
  </f-artboard>
  `
};

const FPolargrid = {
  props: { count: { default: 6 } },
  methods: { range, polarx, polary },
  template: `
  <f-group>
    <f-line
      v-for="(a,i) in range(0,360,360 / count)"
      :key="'a' + i"
      :x2="polarx(a,500)"
      :y2="polary(a,500)"
      stroke-width="1"
      opacity="0.25"
    />
    <f-circle
      v-for="(r,j) in range(0.5,2.5,0.5)"
      :key="'b' + j"
      :r="r"
      stroke-width="1"
      :opacity="[0.2 / 4,0.2 / 2][j % 2]"
    />
  </f-group>
  `
};

const FTarget = {
  methods: { get },
  props: { mode: { default: 'multiply' }},
  template: `
  <f-group :style="{mixBlendMode: mode}">
    <f-letter />
  </f-group>
  `
};

const FTarget2 = {
  methods: { get },
  template: `
  <f-group style="mix-blend-mode: multiply;">
  <!--f-line
    :points="get('p').map(({ x, y}) => ({ x: x - 25, y: y - 25 }))"
    closed
    stroke
    fill="var(--white)"
    stroke="var(--darkblue)"
    stroke-opacity="0.5"
    stroke-width="1"
  /-->
    <f-letter />
  </f-group>
  `
};

fachwerk({
  components: { FLetter, FSource, FTarget, FPolargrid },
  title: 'Patterns',
  src: ['./index.md'],
  type: 'slides',
  home: '..',
  style: {
    "--purple": "var(--blue)",
    "--darkpurple": "var(--darkergray)",
    "--emphasis": "var(--blue)",
    "--lightemphasis": "var(--transparent)",
    "--accent": "var(--blue)"
  }
});
