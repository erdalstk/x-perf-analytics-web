import React from "react"
import ContentLoader from "react-content-loader"

const Loading = (props) => (
  <ContentLoader 
    speed={2}
    width={1080}
    height={650}
    viewBox="0 0 1080 650"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="20" y="20" rx="0" ry="0" width="500" height="300" /> 
    <rect x="570" y="20" rx="0" ry="0" width="500" height="300" /> 
    <rect x="20" y="350" rx="0" ry="0" width="500" height="300" /> 
    <rect x="570" y="350" rx="0" ry="0" width="500" height="300" />
  </ContentLoader>
)

export default Loading