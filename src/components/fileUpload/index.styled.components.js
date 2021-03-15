import styled from "styled-components";
import Upload from "antd/lib/upload";
import Progress from "antd/lib/progress";
import { CrossIcon, TrashIcon, ErrorIcon } from "assets";

const { Dragger } = Upload;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  font-family: ${(props) => props.theme.paragraph.latoPara};
`;

const MarginTop = styled.div`
  margin-top: 32px;
`;

const UploadContainer = styled.div`
  width: 100%;
  height: 81px;
  display: flex;
  border-radius: 4px;
  border: 2px dashed #9aa5b1;
  background-color: #f5f7fa;
  align-items: center;
  justify-content: center;
`;

const FileSelect = styled(Dragger)`
  border: none !important;
  background: transparent !important;
  .ant-upload {
    padding: 0 !important;
  }
  font-weight: bold;
`;

const Title = styled.p`
  color: #9aa5b1;
  font-size: 16px;
  line-height: 20px;
  margin: 0;
  font-family: ${(props) => props.theme.paragraph.latoPara};
`;

const SubTitle = styled.span`
  color: #007bc2;
  font-size: 16px;
  line-height: 20px;
  margin: 0;
  text-decoration: underline;
  font-family: ${(props) => props.theme.paragraph.latoPara};
`;

const FileUploadingContainer = styled.div`
  width: 100%;
  display: grid;
  align-items: center;
  grid-template-columns: 40px 27% 29% 37%;
  justify-content: space-between;
  padding-bottom: 16px;
  border-bottom: 1px solid #e4e7eb;
`;

const FileName = styled.p`
  color: #4d5966;
  width: 100%;
  font-size: 16px;
  font-weight: bold;
  margin: 0;
  text-overflow: ellipsis;
  overflow: hidden;
  display: inline-block;
  font-family: ${(props) => props.theme.paragraph.latoPara};
`;

const CrossIconContainer = styled.div`
  display: flex;
  width: 20px;
  max-width: 20px;
  height: 20px;
  max-height: 20px;
  background-color: #4d5966;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const Cross = styled(CrossIcon)`
  width: 18px !important;
  height: 18px !important;

  g g {
    fill: #ffffff;
  }
`;

const Trash = styled(TrashIcon)`
  width: 24px !important;
  height: 24px !important;
  cursor: pointer;

  path {
    fill: #4d5965;
  }
`;

const Error = styled(ErrorIcon)`
  width: 24px !important;
  height: 24px !important;
  cursor: pointer;
`;

const ProgressBar = styled(Progress)`
  margin-left: 20px !important;

  & .ant-progress-outer {
    padding: 0 !important;
    margin: 0 !important;
  }

  & .ant-progress-text {
    display: none;
  }
`;

const ProgressTitleContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: flex-end;
  aling-item: center;
`;

const ProgressTitle = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin: 0;
  text-overflow: ellipsis;
  overflow: hidden;
  display: inline-block;
  margin-right: 16px;
  font-family: ${(props) => props.theme.paragraph.latoPara};
  color: ${(props) => (props.status === "error" ? "#e6052e" : "#9aa5b1")};
`;

const RightAlign = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export {
  Title,
  Cross,
  Trash,
  Error,
  FileName,
  SubTitle,
  RightAlign,
  MarginTop,
  Container,
  FileSelect,
  ProgressBar,
  ProgressTitle,
  UploadContainer,
  CrossIconContainer,
  ProgressTitleContainer,
  FileUploadingContainer,
};
