

<center>
<div>
  <f-slider to="1" value="0" :value="get('somevalue', 0)" style="width:60px; border:1px solid var(--gray); border-radius:18px; padding: 0 8px; box-shadow: 0 1px 5px 0 hsla(0, 0%, 0%, 0.3) " integer v-on:click.native="get('somevalue') == 1 ? set('somevalue', 0) : set('somevalue', 1)" />
  Some value: {{ get('somevalue', 0) }}
</div>

</center>


---

- sidebar close button fixed or sticky? - DONE

- sidebar padding bit bigger?

- camera to orthogonal or dynamic? - DONE
- polyhedron opacity dynamical or 1 - DONE

- captions for image? (description and / or copyright nfrmtion)

---





- sidebar to (almost?) full width on narrow screens


- sidebar - change trigger style (if important etc) or trigger open from another element (button)




- esc to close sidebars? 
- f-sidebar close button to flex (x is not in center)



- document mode text size
- document mode padding 200px if no padding defined for a slide
- document mode - what to do with f-next-button 



- slides row height sometimes strange
- static scene - trigger update once from outside




- katex \newline not working