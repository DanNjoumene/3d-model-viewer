# Troubleshooting Guide

## Common Issues and Solutions

### Installation Issues

#### Problem: `npm install` fails
**Solution:**
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

#### Problem: Node version too old
**Solution:**
```bash
# Check Node version (should be 16+)
node --version

# Update Node.js from https://nodejs.org/
```

### Build Issues

#### Problem: TypeScript errors
**Solution:**
```bash
# Check for type errors
npx tsc --noEmit

# If errors persist, check:
# - All imports are correct
# - tsconfig.json is present
# - @types packages are installed
```

#### Problem: Vite fails to start
**Solution:**
```bash
# Check if port 3000 is in use
lsof -i :3000

# Kill process if needed
kill -9 <PID>

# Or use a different port
npm run dev -- --port 3001
```

### Runtime Issues

#### Problem: Models don't load
**Possible Causes:**
1. **Unsupported format** - Only .glb, .gltf, .obj, .fbx are supported
2. **Corrupted file** - Try a different model
3. **File too large** - Browser memory limits (try < 100MB)
4. **CORS issues** - Only affects loading from external URLs

**Solution:**
```bash
# Test with included sample models
# They are known to work
```

#### Problem: Black screen / no 3D view
**Possible Causes:**
1. **WebGL not supported** - Check browser
2. **GPU drivers outdated**
3. **Three.js initialization error**

**Solution:**
```bash
# Check WebGL support
# Visit: https://get.webgl.org/

# Check browser console for errors
# Open DevTools (F12) and look for errors
```

#### Problem: Performance is slow
**Possible Causes:**
1. **Model too complex** (>500k triangles)
2. **High-res textures** (>4K)
3. **Integrated graphics**

**Solution:**
- Use decimation tools to reduce triangle count
- Resize textures to 2K or lower
- Try wireframe or unlit mode for better performance

#### Problem: Statistics show incorrect values
**Possible Causes:**
1. **Model has non-standard structure**
2. **Instanced geometry**

**Solution:**
- Try a different model format
- Ensure model is properly exported from 3D software

#### Problem: Render modes don't change appearance
**Possible Causes:**
1. **Model has no UVs** (UV mode won't work)
2. **Model has no materials** (some modes depend on materials)

**Solution:**
- Check model in 3D software (Blender, Maya, etc.)
- Ensure model has proper UVs and materials

### Camera Issues

#### Problem: Camera presets don't work
**Possible Causes:**
1. **No model loaded**
2. **Model bounds calculation error**

**Solution:**
- Ensure a model is loaded first
- Check browser console for errors

#### Problem: Can't rotate/zoom
**Possible Causes:**
1. **OrbitControls not initialized**
2. **Mouse capture issue**

**Solution:**
- Refresh the page
- Try different mouse button combinations
- Check if viewport has focus

### Export Issues

#### Problem: Screenshot downloads are black
**Possible Causes:**
1. **Canvas not rendered**
2. **Timing issue**

**Solution:**
- Ensure model is visible before capturing
- Try capturing again after a moment

#### Problem: Screenshot quality is poor
**Possible Causes:**
1. **Canvas resolution**
2. **Compression settings**

**Solution:**
- Screenshot captures at current viewport resolution
- Maximize viewport before capturing

## Browser Compatibility

### Supported Browsers
- ✅ Chrome 90+
- ✅ Edge 90+
- ✅ Firefox 88+
- ✅ Safari 15+

### Known Issues by Browser

#### Safari
- WebGL 2.0 support may be limited on older devices
- Some shader features might not work

#### Firefox
- File API might prompt security warnings
- Allow file access when prompted

#### Mobile Browsers
- Performance may be limited
- Touch controls might differ from mouse

## Development Issues

#### Problem: Hot reload not working
**Solution:**
```bash
# Restart dev server
npm run dev
```

#### Problem: Changes not reflected
**Solution:**
```bash
# Hard refresh
# Chrome: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
# Clear browser cache if needed
```

#### Problem: TypeScript complains about Three.js types
**Solution:**
```bash
# Reinstall type definitions
npm install --save-dev @types/three
```

## Getting Help

If you encounter an issue not listed here:

1. **Check Browser Console**
   - Open DevTools (F12)
   - Look for error messages
   - Note the exact error text

2. **Check Terminal Output**
   - Look for build/runtime errors
   - Note any warnings

3. **Verify Environment**
   - Node version: `node --version` (should be 16+)
   - npm version: `npm --version`
   - OS and browser version

4. **Test with Sample Models**
   - Try loading the included sample models
   - If they work, the issue is with your model file

5. **Check Model File**
   - Open model in Blender or other 3D software
   - Verify it's not corrupted
   - Export in a different format

## Performance Optimization Tips

1. **Model Optimization**
   - Reduce polygon count (use decimation modifiers)
   - Optimize texture sizes (2K max)
   - Merge materials where possible
   - Use texture atlases

2. **Application Performance**
   - Close unused browser tabs
   - Disable browser extensions
   - Use hardware acceleration (check browser settings)

3. **Render Settings**
   - Use unlit or wireframe mode for better performance
   - Disable grid/axes helpers if not needed
   - Reduce light intensity for faster rendering

## Debugging Tips

```javascript
// Add to src/main.tsx to enable Three.js debug logs
import * as THREE from 'three';
THREE.ColorManagement.enabled = true;
console.log('Three.js version:', THREE.REVISION);
```

```javascript
// Add to useModelLoader.ts for detailed loading info
console.log('Loading model:', file.name);
console.log('Model stats:', stats);
console.log('Model object:', object);
```

## Clean Reinstall

If all else fails, try a clean reinstall:

```bash
# Stop dev server
# Delete all generated files
rm -rf node_modules dist .vite package-lock.json

# Reinstall
npm install

# Restart
npm run dev
```
