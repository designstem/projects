export default{
  props: {
    input: {
        type: String,
        required: false,
        default: ''
    }
  },
  data() {
    return {
      query: ''
    }
  },
  template: `
  <div>
    <FSheetsV4
      id="1ZrQ_OwfitB7dvZh4LzUmanbEX6oR3kWI2YVBTkFLZfc" sheet="links"
      v-slot="{ value }">
      <div style="display: grid; grid-template-columns:1fr 2fr">

        <div>
          <div  style="position:sticky; top:15vh;">
            <span style="font-size:0.85em; font-weight:700; color:var(--darkgray);">SEARCH FOR:</span>
            <input type="text" v-model="query" style="width:100%; margin-top:0.5em;" />
          </div>
        </div>

        <div>
          <a v-for="(item, i) in value" :key="'item'+i"
            v-if="Object.values(item).toString().toLowerCase().includes( query.toLowerCase() )"
            style="display:flex; padding: var(--base3); border-radius:var(--border-radius); box-shadow: 0 0 3px 1px hsla(0, 0%, 0%, 0.1); margin:2vmin; font-weight:normal; border:none; background:var(--white)"
            :href="item.inputurl" target="_blank"
          >
            <h3 style="flex:0 0 70px;"><span class="bullet" style="word-break: keep-all; overflow:hidden; width:1.9em; height:1.9em; padding:1.2em; font-size:75%; font-weight:400; --purple:var(--red)">{{i+1}}</span></h3>
            <div>
              <h5>{{item.title}}</h5>
              <p style="font-family:var(--font-serif); margin-bottom:0.5em">{{item.metadescription}}</p>
              <p style="color:var(--blue); font-size:0.75em; border-bottom: none; text-decoration:underline; word-break: break-word; line-height:1.1">{{item.inputurl}}</p>
            </div>
          </a>
        </div>

      </div>
    </FSheetsV4>
  </div>
  `
};
