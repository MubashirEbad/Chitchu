import React from "react";
import axios from "axios";
import {
  Title,
  Cross,
  Trash,
  Error,
  RightAlign,
  FileName,
  SubTitle,
  MarginTop,
  Container,
  FileSelect,
  ProgressBar,
  ProgressTitle,
  UploadContainer,
  CrossIconContainer,
  ProgressTitleContainer,
  FileUploadingContainer,
} from "./index.styled.components";
import { FileIcon } from "assets";
import { calculateFileSize } from "utils/application.utils";

const CancelToken = axios.CancelToken;
const source = CancelToken.source();

const UploadFiles = (props) => {
  const [fileSelected, setFileSelected] = React.useState(null);
  const [uploadStatus, setUploadStatus] = React.useState("uploading");
  const [percentage, setPercentage] = React.useState(50);
  const { isLoading = false, setFile } = props;

  const beforeUpload = async (file) => {
    setFileSelected(file);
    setTimeout(() => {
      setPercentage(100);
      setUploadStatus("uploaded");
      setFile(file);
    }, 2000);
  };

  const onClearFile = () => {
    setFileSelected(null);
    setFile(null);
    setPercentage(50);
  };

  return (
    <Container>
      <FileSelect
        name="file"
        multiple={false}
        disabled={isLoading}
        customRequest={() => { }}
        beforeUpload={beforeUpload}
      >
        <UploadContainer>
          <Title> <SubTitle> Lataa pdf </SubTitle> </Title>
        </UploadContainer>
      </FileSelect>
      {fileSelected && (
        <MarginTop>
          <FileUploadingContainer>
            <FileIcon />
            <FileName> {fileSelected.name || "----"} </FileName>
            {uploadStatus === "uploading" ? (
              <ProgressBar
                status={percentage < 100 && "active"}
                percent={percentage}
                strokeColor="#5c8ff9"
              />
            ) : (
                <FileName> </FileName>
              )}
            <RightAlign>
              {uploadStatus === "uploading" && (
                <CrossIconContainer onClick={onClearFile}>
                  <Cross />
                </CrossIconContainer>
              )}
              {uploadStatus !== "uploading" && (
                <ProgressTitleContainer>
                  <ProgressTitle status={uploadStatus}>
                    {uploadStatus === "error"
                      ? "Upload failed"
                      : calculateFileSize(fileSelected?.size || 0)}
                  </ProgressTitle>
                  {uploadStatus === "error" ? <Error onClick={onClearFile} /> : <Trash onClick={onClearFile} />}
                </ProgressTitleContainer>
              )}
            </RightAlign>
          </FileUploadingContainer>
        </MarginTop>
      )}
    </Container>
  );
};

export default UploadFiles;
