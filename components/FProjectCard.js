export default {
  props: ['project', 'status'],
  data: () => ({
    statuses: {
      feature: {
        background: 'var(--yellow)',
        border: 'var(--yellow)'
      },
      progress: {
        background: '#eee',
        border: '#eee'
      },
      experiment: {
        background: '#eee',
        border: '#eee'
      }
    }
  }),
  template: `
  <a :href="'./' + project.scenario">
  <f-card2
    class="project-card"
    :background="statuses[status].background"
    :border="statuses[status].border"
    :image="project.image"
  >
      <h5>{{ project.title }}</h5>
      <small>{{ project.desc }}</small>
      <p />
      <div style="display: flex; flex-wrap: wrap;">
        <f-tag
          v-for="(tag,i) in project.designtags.split(',')"
          :key="'i' + i"
        >
          {{ tag }}
        </f-tag>
        <f-tag
          v-for="(tag,j) in project.stemtags.split(',')"
          :key="'j' + j"
          style="background: var(--lightblue)"
        >
          {{ tag }}
        </f-tag>
      </div>
      <p />
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
  </f-card2>
  </a>
  `
}