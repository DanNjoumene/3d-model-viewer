# Quick Start Guide

## 🚀 Get Started in 3 Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Open Browser
Navigate to: **http://localhost:3000**

---

## 📦 Your First Model

### Load a Sample Model
Two sample models are included in `public/models/`:
- `low_poly_deer_elk.glb` (141KB) - Fast loading, good performance
- `high_poly_plague_knight.glb` (47MB) - Detailed model, tests performance

### Upload Your Own Model
1. Click the upload zone in the left sidebar
2. Select a `.glb`, `.gltf`, `.obj`, or `.fbx` file
3. Wait for loading to complete
4. Explore your model!

---

## 🎮 Basic Controls

### Mouse Controls
- **Left-click + drag** → Rotate model
- **Right-click + drag** → Pan camera
- **Scroll wheel** → Zoom in/out

### Keyboard Shortcuts
- `Esc` → None (mouse only for now)

---

## ✨ Quick Features Tour

### 1. Model Information (Left Sidebar)
- **Vertex Count** - Number of points in the model
- **Triangle Count** - Number of faces
- **Meshes** - Number of separate objects
- **Materials** - Number of materials/textures
- **Dimensions** - Size in 3D units

### 2. Performance Score (Left Sidebar)
- **0-54** = Poor (red) - Needs optimization
- **55-79** = Moderate (yellow) - Acceptable
- **80-100** = Good (green) - Well optimized

### 3. Render Modes (Right Panel)
- **PBR** - Original look with materials
- **Wire** - See the polygon structure
- **Normal** - Rainbow color shows surface angles
- **UV** - Checkerboard shows texture mapping
- **Unlit** - Flat color, no lighting

### 4. Camera Presets (Right Panel)
- **Front** - View from front
- **Side** - View from right side
- **Top** - Bird's eye view
- **3/4** - Angled perspective view

### 5. Lighting (Right Panel)
- **Main Light** - Directional light from top-right
- **Ambient Light** - Overall scene brightness
- Adjust intensity (0-200%)
- Change color with color picker

### 6. Export (Right Panel)
- Click **"📸 Export Screenshot"**
- Downloads PNG of current view
- High quality, same as screen resolution

---

## 🎯 Common Tasks

### Compare Two Views
1. Upload model
2. Set camera to "Front"
3. Export screenshot
4. Set camera to "3/4"
5. Export screenshot
6. Compare the two images

### Analyze Model Quality
1. Upload model
2. Check Performance Score
3. Read optimization tips
4. Use Wireframe mode to see polygon density

### Find Model Issues
1. Use **Normal mode** to check smooth surfaces
2. Use **UV mode** to check texture mapping
3. Look for stretched or distorted patterns

### Prepare for Presentation
1. Upload model
2. Adjust lighting for best look
3. Set camera to best angle
4. Hide grid and axes (bottom-left buttons)
5. Export screenshot

---

## 📊 Understanding Performance Tips

### "File size is very large"
- **Issue**: File is >50MB
- **Fix**: Use compression tools or reduce texture sizes

### "Triangle count is very high"
- **Issue**: >200k triangles
- **Fix**: Use decimation in Blender or other 3D software

### "High material count"
- **Issue**: >10 materials
- **Fix**: Merge similar materials, use texture atlases

### "Texture memory usage is high"
- **Issue**: Textures >50MB total
- **Fix**: Reduce texture resolution to 2K or 1K

---

## 🛠️ Supported File Formats

### ✅ Recommended
- **GLB** (Binary glTF) - Best for web, includes textures
- **GLTF** (JSON glTF) - Readable format, requires texture files

### ✅ Supported
- **OBJ** - Widely compatible, simple format
- **FBX** - From Autodesk software, includes animations

### ❌ Not Supported
- STL, PLY, 3DS, MAX, BLEND, etc.
- **Workaround**: Export to GLB from Blender

---

## 🎨 Tips for Best Results

1. **Model Preparation**
   - Clean up geometry before exporting
   - Remove hidden objects
   - Apply transformations
   - Center the pivot point

2. **Texture Optimization**
   - Use 2K textures max (2048×2048)
   - Compress textures (JPEG for color, PNG for alpha)
   - Use texture atlases when possible

3. **Material Setup**
   - Use PBR materials for best results
   - Include roughness and metalness maps
   - Ensure proper UV unwrapping

4. **File Size**
   - Keep models under 50MB for web
   - Use Draco compression for GLB files
   - Remove unused vertices/materials

---

## 🚨 If Something Goes Wrong

### Model Won't Load
- Check file format (.glb, .gltf, .obj, .fbx only)
- Try a different model
- Check browser console (F12) for errors

### Performance is Slow
- Try Wireframe or Unlit mode
- Close other browser tabs
- Check if model is very large (>500k triangles)

### Can't See Model
- Refresh the page
- Check if WebGL is enabled in browser
- Try a different browser

### More Help
See `TROUBLESHOOTING.md` for detailed solutions.

---

## 📚 Next Steps

1. ✅ Load a sample model
2. ✅ Try all render modes
3. ✅ Test camera presets
4. ✅ Adjust lighting
5. ✅ Export a screenshot
6. ✅ Upload your own model

**Enjoy exploring 3D models with VERTEX!** 🎉
