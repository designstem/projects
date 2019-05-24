

# Polyhedra

When regular polygons are expanded and seen in the three dimensions, form the Regular Polyhedra. These are solid objects bounded by flat surfaces.

<center>
    <f-scene3>
        <f-box3 rotation="30 30 0" scale="1.5" />
    </f-scene3>
</center>

In regular polyhedral we distinguish Faces, Edges and Vertices. Faces are the bounded surfaces that consist the external surface of the structure. Two adjacent faces are connected together with an Edge. Three or more  adjacent faces intersect to a Vertex.

In regular polyhedrons the faces are identical.


---

| theme: dark


#### Most common regular polyherdra are:

### &nbsp;

#### **1** Regular tetrahedron, pyramid
~4 faces, 6 edges, 4 vertices~

<center>
    <f-scene3 style="width:100%;">
        <!-- <f-polyhedron3 hedron="Tetrahedron" rotation="0 90 0" scale="1.5" /> -->
        <f-hedron3 :shading="true" :height="1" :strokeWidth="0" :count="4" rotation="-30 0 60" scale="1.5" />
    </f-scene3>
</center>


#### **2** Cube
~6 faces, 12 edges, 8 vertices~

<center>
    <f-scene3>
        <f-box3 rotation="30 30 0" scale="1.5" />
    </f-scene3>
</center>


#### **3** Octahedron
~8 faces, 12 edges, 6 vertices~

<center>
    <f-scene3>
         <f-polyhedron3 hedron="Octahedron" rotation="-80 0 45" scale="1.5" :opacity="1" />
    </f-scene3>
</center>


#### **3** Dodecahedron
~12 faces, 30 edges, 20 vertices~

<center>
    <f-scene3>
        <f-polyhedron3 hedron="Dodecahedron" rotation="0 10 20" scale="1.5" />
    </f-scene3>
</center>


#### **4** Icosahedron
~20 faces, 30 edges, 12 vertices~

<center>
    <f-scene3>
        <f-polyhedron3 hedron="Icosahedron" rotation="0 10 20" scale="1.5" />
    </f-scene3>
</center>




---


Polyhedra can be unfolded into nets, i.e shapes that combine triangles and regular polygons. The following figures present how regular polyhedra are decomposed into two-dimentional nets.


---




