ViMeASpaTeA
===========

Demo : http://maulik-kamdar.com/code/meteorViz/

Visualizing Meteorites across Spatial and Temporal Attributes using A WebGL 3D Globe Visualization

ViMeA-SpaTeA is an attempt to facilitate users to visualize meteorite collisions across spatial and temporal attributes. The platform allows users to interactively explore the collisions on a three dimensional (3D) visualization of the earth over many years. The time periods have been divided into decades - '1930' contains the meteorite collisions from '1930-1939'. These visualizations can be filtered down on the basis of the time of impact, the type of the meteorite and whether its fall was observed or found. These meteorites are visualized spatially using user-defined preferences, either on a Political Map or a Natural Map Texture. The total meteorites adhering to the filtered criteria are shown, and the top 20 prominent meteors are shown in a separate dialog, sorted in accordance to its mass. You can Revolve the 3D Globe visualization using the Mouse and also Zoom into a specific point using the Mouse Wheel. The meteorite collisions are displayed as Cylindrical Projections from the surface of the 3D Globe, the dimensions of which are directly proportional to the observed mass, and the color depends on the type of the meteorite. To account the wide range of mass of these meteorites the mapping scale decided was (Height = (Square Root (Mass))*0.5), as a result extremely small meteorites (0-100) may not be observed at first glance.

The 3D Globe Visualization has been derived from the highly interactive WebGL Globe Visualization designed by Google Data Arts Team, as an open source platform for geographical data visualization. Due to its reliance on WebGL, it may be browser dependent or Graphics card dependent. In case of any errors, a customary message providing suitable alternatives is provided. The Platform is best viewed using a Google Chrome Browser on a 1920x1080 Display Resolution.

The data has been obtained from The Meteorite Bulletin, constructed and maintained by the Nomenclature Committee of the Meteoritical Society, and is available for download at Visualizing.org. The database contains information about each meteorite, including the classification, place and year of discovery, whether if was observed to fall and references to the IMCA Encyclopedia of Meteorites, from which around 3500 images have been linked.

The ViMeA-SpaTeA platform has been developed by Maulik Kamdar, as a simplistic coffee-time project, whilst learning WebGL. It would further be developed to provide more interactivity, as well as animating the fall of meteorites over the WebGL Globe. You can contact him to discuss ideas using either Email or Twitter.
