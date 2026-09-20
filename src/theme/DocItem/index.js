import DocItem from '@theme-original/DocItem';

import GiscusComments from '@site/src/components/GiscusComments';

export default function DocItemWrapper(props) {
  return (
    <>
      <DocItem {...props} />
      <div className="container">
        <GiscusComments />
      </div>
    </>
  );
}