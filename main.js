// Create canvas variable
block_y=1;
block_x=1;

block_image_width = 350;
block_image_height = 430;

var block_image_object= "";

function new_image(get_image)
{
   // to upload images
   fabric.Image.fromURL(get_image, function(Img)
   {
       block_image_object= Img;
       block_image_object.scaleToWidth(block_image_width);
       block_image_object.scaleToHeight(block_image_height);
       block_image_object.set({
         top:player_y,
         left:player_x
     });

     canvas.add(block_image_object);

 });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

   if(keyPressed == '82') // add appropriate keycode
   {
       // upload red ranger
       new_image('http://4.bp.blogspot.com/-T1s48CrLGjk/TgiqmdAYaPI/AAAAAAAADgE/QdffdPGL_BY/s1600/Power-Rangers-Red-Ranger.gif');
        console.log("Red ranger is printed");

   }
   if(keyPressed == '71')
   {
       block_x = 200;
       // upload green ranger
       new_image('http://4.bp.blogspot.com/-kziOQcpbRw0/TklL4kHb98I/AAAAAAAADhw/w7oeNtndZUA/s1600/Power-Rangers-Green-Ranger.gif');
        console.log("Green ranger is printed");
   }
   
   if(keyPressed == '89')
   {
       block_x =350;
       // upload yellow ranger
       new_image('http://4.bp.blogspot.com/-Cx7ABOiUCQY/TpNROaHwVoI/AAAAAAAADjc/GFTTRJso6gw/s1600/Power-Rangers-Yellow-Ranger.gif');
        console.log("Yellow ranger is printed");
   }
   if(keyPressed == '80')
   {
       block_x = 600;
       // upload pink ranger
       new_image('http://4.bp.blogspot.com/-T1s48CrLGjk/TgiqmdAYaPI/AAAAAAAADgE/QdffdPGL_BY/s1600/Power-Rangers-Pink-Ranger.gif');
        console.log("Pink ranger is printed");
   }
   if(keyPressed == '66')
   {
       block_x = 700;
   // upload blue ranger
   new_image('http://4.bp.blogspot.com/-kziOQcpbRw0/TklL4kHb98I/AAAAAAAADhw/w7oeNtndZUA/s1600/Power-Rangers-Blue-Ranger.gif');
        console.log("Blue ranger is printed");
   }
   
}

