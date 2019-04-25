export default {
  template: `
    <span style="
      margin: 0 5px 5px 0;
      border: 2px solid var(--primary);
      font-size: calc(var(--base) * 1.25);
      color: var(--primary);
      padding: 3px 6px;
      background: var(--white);
      border-radius: 3px;
    ">
      <slot />
    </span>
  `
}