export default {
  props: ['project', 'status'],
  data: () => ({
    statuses: {
      feature: {
        background: 'white',
        border: 'var(--primary)'
      },
      progress: {
        background: 'white',
        border: 'var(--primary)'
      },
      preparation: {
        background: 'white',
        border: 'var(--primary)'
      },
      experiment: {
        background: 'white',
        border: 'var(--primary)'
      }
    }
  }),
  template: `
  <a :href="project.type == 'preparation' ? project.url : './' + project.scenario">
  <f-card2
    class="project-card"
    :background="statuses[status].background"
    :border="statuses[status].border"
    :image="project.image"
  >
      <h5 style="margin-top: var(--base);">{{ project.title }}</h5>
      <p style="font-size: calc(var(--base) * 1.75)">{{ project.desc }}</p>
      <p />
      <div style="display: flex; flex-wrap: wrap;">
        <f-tag
          v-for="(tag,i) in project.designtags.split(',')"
          :key="'i' + i"
          style="background: var(--lightyellow)"
        >
          {{ tag }}
        </f-tag>
        <f-tag
          v-for="(tag,j) in project.stemtags.split(',')"
          :key="'j' + j"
          style="background: hsl(203, 77%, 86%)"
        >
          {{ tag }}
        </f-tag>
      </div>
      <p />
      <!--
      <f-inline v-if="project.time">
        <span><f-clock-icon duration2="15" /></span>
        <small style="opacity: 0.65">{{ project.time }}</small>
      </f-inline>
      <f-inline v-if="project.people">
      <span><f-people-icon /></span>
        <small style="opacity: 0.65">{{ project.people }}</small>
      </f-inline>
      <f-inline v-if="project.people">
      <span><f-tools-icon /></span>
      <small style="opacity: 0.65">{{ project.facilities }}</small>
      </f-inline>
      -->
      <f-sidebar style="--sidebar-width: 40vw;" v-if="project.about" :src="'./' + project.scenario + '/about.md'">
          <button slot="button">About</button>
      </f-sidebar>
  </f-card2>
  </a>
  `
}