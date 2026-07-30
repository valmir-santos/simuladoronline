export interface CompressionOptions {
  maxWidth?: number;
  maxHeight?: number;
  quality?: number;
  mimeType?: string;
}

export interface CompressedImageResult {
  file: File;
  base64: string;
  originalSize: number;
  compressedSize: number;
  width: number;
  height: number;
}

/**
 * Comprime uma imagem utilizando HTML5 Canvas no lado do cliente.
 * Reduz a resolução máxima (padrão 1200px) e ajusta a qualidade para evitar erro 413 (Payload Too Large).
 */
export async function compressImage(
  file: File,
  options: CompressionOptions = {}
): Promise<CompressedImageResult> {
  const {
    maxWidth = 1200,
    maxHeight = 1200,
    quality = 0.8,
    mimeType = 'image/jpeg'
  } = options;

  const originalSize = file.size;

  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (event) => {
      const img = new Image();

      img.onload = () => {
        let width = img.width;
        let height = img.height;

        // Calcular proporções mantendo Aspect Ratio
        if (width > maxWidth) {
          height = Math.round((height * maxWidth) / width);
          width = maxWidth;
        }

        if (height > maxHeight) {
          width = Math.round((width * maxHeight) / height);
          height = maxHeight;
        }

        // Desenhar na Canvas HTML5
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext('2d');
        if (!ctx) {
          reject(new Error('Não foi possível inicializar o contexto 2D do Canvas HTML5.'));
          return;
        }

        // Preencher fundo branco (para transparência de PNG convertida para JPEG)
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(0, 0, width, height);

        ctx.drawImage(img, 0, 0, width, height);

        // Exportar como DataURL (Base64)
        const base64 = canvas.toDataURL(mimeType, quality);

        // Converter para Blob/File novo e leve
        canvas.toBlob(
          (blob) => {
            if (!blob) {
              reject(new Error('Erro ao converter Canvas para Blob.'));
              return;
            }

            const compressedFile = new File([blob], file.name.replace(/\.[^/.]+$/, "") + ".jpg", {
              type: mimeType,
              lastModified: Date.now()
            });

            resolve({
              file: compressedFile,
              base64,
              originalSize,
              compressedSize: blob.size,
              width,
              height
            });
          },
          mimeType,
          quality
        );
      };

      img.onerror = (err) => reject(err);
      img.src = event.target?.result as string;
    };

    reader.onerror = (err) => reject(err);
    reader.readAsDataURL(file);
  });
}
