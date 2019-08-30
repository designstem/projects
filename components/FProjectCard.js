import FTeam from "./FTeam.js";

export default {
  components: { FTeam },
  props: ['project', 'status', 'small'],
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
    :image="small ? '' : project.image"
    style="position: relative"
  >
      <h4 style="margin-top: var(--base);">{{ project.title }}</h4>
      <p style="font-size: calc(var(--base) * 2)">{{ project.desc }}</p>
      <p />
      <div style="display: flex; flex-wrap: wrap;">
        <f-tag
          v-for="(tag,i) in project.designtags.split(',')"
          :key="'i' + i"
          style="background: var(--gray)"
        >
          {{ tag }}
        </f-tag>
        <f-tag
          v-for="(tag,j) in project.stemtags.split(',')"
          :key="'j' + j"
          style="background: var(--lightergray)"
        >
          {{ tag }}
        </f-tag>
      </div>
      
      <h4>&nbsp;</h4>

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
      <f-sidebar size="half">
        <button style="position: absolute; left: var(--base2); bottom: var(--base2);">About</button>
        <div slot="content" style="padding: var(--base3)">
          <h2>{{ project.title }}</h2>
          <p><big>{{ project.desc }}</big></p>
          <a class="primary" :href="'./' + project.scenario">Go to scenario<f-rightarrow-icon /></a>
          <p />
          <div v-if="project.team">
            <!-- <f-fetch :src="'./' + project.scenario + '/about.md'"  v-slot="{ value }">
              <f-content
                :content="value"
                type="document"
              />
            </f-fetch> -->
            <f-embed :src="'./' + project.scenario + '/about.md'" />
            <h3>Team</h3>
            <f-team :team="project.team.split(',').map(t => t.trim())" />
          </div>
        </div>
      </f-sidebar>
  </f-card2>
  </a>
  `
}