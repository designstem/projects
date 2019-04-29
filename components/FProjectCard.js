export default {
  props: ['project', 'status'],
  data: () => ({
    statuses: {
      feature: {
        background: 'var(--yellow)',
        border: 'var(--yellow)'
      },
      progress: {
        background: 'hsl(44, 100%, 87%)',
        border: 'hsl(44, 100%, 87%)'
      },
      experiment: {
        background: 'var(--lightblue)',
        border: 'var(--lightblue)'
      }
    }
  }),
  template: `
  <f-card
    class="project-card"
    :background="statuses[status].background"
    :border="statuses[status].border"
  >
    <a :href="'./' + project.scenario">
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
        >
          {{ tag }}
        </f-tag>
      </div>
      <p />
      <f-inline v-if="project.time">
        <span><f-clock-icon duration2="15" /></span>
        <small>{{ project.time }}</small>
      </f-inline>
      <f-inline v-if="project.people">
      <span><f-people-icon /></span>
        <small>{{ project.people }}</small>
      </f-inline>
      <f-inline v-if="project.people">
      <span><f-tools-icon /></span>
      <small>{{ project.facilities }}</small>
      </f-inline>
    </a>
  </f-card>
  `
}