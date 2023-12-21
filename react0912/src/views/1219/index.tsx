import React01 from './a_React/React01'
import React02 from './a_React/React02'
import Component01 from './c_Component/Component01'
import Route01 from './b_Route/Route01'
import Component02 from './c_Component/Component02'

// 1219 폴더 내의 전체 컴포넌트를 담는 폴더
export default function Index() {
  return (
    <div>
      <h1>a_React</h1>
      <React01 />
      <React02 />

      <h1>b_Route</h1>
      <Route01 />

      <h1>c_Component</h1>
      <Component01 />
      <Component02 />
    </div>
  )
}
