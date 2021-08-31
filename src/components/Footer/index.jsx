import { useIntl } from 'umi';
// import { GithubOutlined } from '@ant-design/icons';
// import { DefaultFooter } from '@ant-design/pro-layout';

export default () => {
  const intl = useIntl();
  const defaultMessage = intl.formatMessage({
    id: 'app.copyright.produced',
    defaultMessage: 'test',
  });
  const currentYear = new Date().getFullYear();
  return (
    <div
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'test',
          title: 'test',
          href: 'https://pro.ant.design',
          blankTarget: true,
        },
      
        {
          key: 'Ant Design',
          title: 'Ant Design',
          href: 'https://ant.design',
          blankTarget: true,
        },
      ]}
    />
  );
};
