// Template d'une image

export default `
<!-- Image template -->
  <figure data-id="{{id}}">
    <img src="{{src}}" alt="{{alt}}">
    <!-- Bouton d'informations sur la photo -->
    <figcaption>
      <a href="#" class="icon icon-info">
        <i class="material-icons">add_circle</i>
      </a>
      <div>{{content}}</div>
    </figcaption>
    <!-- /Bouton d'informations sur la photo -->
  </figure>
`;
