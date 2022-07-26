import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

export const SideNav = ({ title, content, content2 }) => {
  return (
    <SimpleBar style={{ maxHeight: 800 }} className="bg-slate-700">
      <h1 className="font-medium text-white m-1">{title}</h1>
      {content}
      <h1 className="font-medium text-white m-1">RECOMMENDED CHANNELS</h1>
      {content2}
    </SimpleBar>
  );
};