import type { Object3DNode } from "@react-three/fiber"
import type { MeshLineGeometry, MeshLineMaterial } from "@react-three/drei"

declare module "@react-three/fiber" {
  interface ThreeElements {
    meshLineGeometry: Object3DNode<MeshLineGeometry, typeof MeshLineGeometry>
    meshLineMaterial: Object3DNode<MeshLineMaterial, typeof MeshLineMaterial>
  }
}

// Alternative approach - extending JSX intrinsic elements directly
declare global {
  namespace JSX {
    interface IntrinsicElements {
      meshLineGeometry: any
      meshLineMaterial: any
    }
  }
}
